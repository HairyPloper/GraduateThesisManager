
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Serenity.Abstractions;
using Serenity.Reporting;
using Serenity.Web;

namespace GraduateThesisManager.Common.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.MessagesRepository;
    using MyRow = Entities.MessagesRow;

    [RoutePrefix("Services/Common/Messages"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MessagesController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        /// <summary>
        /// Lists the excel.
        /// </summary>
        /// <param name="connection">The connection.</param>
        /// <param name="request">The request.</param>
        /// <returns>Excel file</returns>
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns,
                typeof(GraduateThesisManager.Common.Columns.MessagesColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "MessagesList_" +
                                                    DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public MessagesResponse MessageBatchAction(MessagesResponseBatchRequest request, IUnitOfWork uow)
        {
            var response = new MessagesResponse { IsSuccessful = true };

            if (request == null || request.messages == null || request.messages.Length == 0)
                throw new ValidationError("InvalidRequest", "Select at least one message.");

            if (request.messages.Length > 100 || request.action < 0 || request.action > 2)
                throw new ValidationError("InvalidRequest", "Invalid message batch request.");

            int parsedId;
            var messageIds = request.messages
                .Where(x => Int32.TryParse(x, out parsedId) && parsedId > 0)
                .Select(Int32.Parse)
                .Distinct()
                .ToList();

            if (messageIds.Count != request.messages.Distinct().Count())
                throw new ValidationError("InvalidRequest", "One or more message identifiers are invalid.");

            var userId = ((UserDefinition)Authorization.UserDefinition).UserId;
            var fields = MyRow.Fields;

            try
            {
                foreach (var messageId in messageIds)
                {
                    var message = uow.Connection.TryById<MyRow>(messageId);
                    if (message == null || (message.IdFrom != userId && message.IdTo != userId))
                        continue;

                    if (request.action == 0)
                        new SqlDelete(fields.TableName)
                            .Where(fields.Id == messageId)
                            .Execute(uow.Connection);
                    else if (request.action == 1)
                        new SqlUpdate(fields.TableName)
                            .Set(fields.IsChecked, !message.IsChecked.GetValueOrDefault())
                            .Where(fields.Id == messageId)
                            .Execute(uow.Connection);
                    else
                        new SqlUpdate(fields.TableName)
                            .Set(fields.IsImportant, !message.IsImportant.GetValueOrDefault())
                            .Where(fields.Id == messageId)
                            .Execute(uow.Connection);
                }
            }
            catch (Exception ex)
            {
                ex.Log();
                response.IsSuccessful = false;
                response.error = ex.Message;
                throw;
            }

            return response;
        }

        [HttpPost]
        [WebMethod]
        [ValidateInput(false)]
        public JsonResult SendMessage(Message data, IUnitOfWork uow)
        {
            if (data == null)
                throw new ValidationError("InvalidRequest", "Message data is required.");

            var recipient = data.to.TrimToNull();
            var subject = data.subject.TrimToNull();
            var messageBody = data.message.TrimToNull();

            if (recipient == null || subject == null || messageBody == null)
                throw new ValidationError("InvalidRequest", "Recipient, subject, and message are required.");

            var safeMessageBody = HttpUtility.HtmlEncode(messageBody);
            if (subject.Length > 100 || safeMessageBody.Length > 1000)
                throw new ValidationError("InvalidRequest", "Subject or message is too long.");

            var idFrom = ((UserDefinition)Authorization.UserDefinition).UserId;
            var user = Dependency.Resolve<IUserRetrieveService>().ByUsername(recipient) as UserDefinition;
            if (user == null)
                throw new ValidationError("CantFindUserWithEmail", Texts.Validation.CantFindUserWithEmail);
            try
            {
                uow.Connection.Insert(new MyRow
                {
                    IdFrom = idFrom,
                    IdTo = user.UserId,
                    SendDate = DateTime.Now,
                    Message = safeMessageBody,
                    Subject = subject,
                    IsChecked = false,
                    IsImportant = false,
                });
                var response = new { successful = true };
                return Json(response);
            }
            catch (Exception ex)
            {
                ex.Log();
                var response = new { successful = false };
                return Json(response);
            }
        }
    }
    public class MessagesResponse : ServiceResponse
    {
        public bool IsSuccessful { get; set; }
        public string error { get; set; }
    }
    public class MessagesResponseBatchRequest
    {
        public string[] messages { get; set; }
        public int action { get; set; }
    }
    public class Message
    {
        public string to;
        public string subject;
        public string message;
    }
}
