
using System;
using System.Collections.Generic;
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
            MessagesResponse response = new MessagesResponse();
            var result = string.Join(",", request.messages);
            try
            {
                string sqlStatement = "";
                switch (request.action)
                {
                    //Delete
                    case 0:
                        {
                            sqlStatement = " DELETE FROM Messages WHERE Id IN (" + result + ")";
                            break;
                        }
                    //Check
                    case 1:
                        {
                            sqlStatement = "UPDATE Messages SET IsChecked = 1 - IsChecked WHERE [Id] IN (" + result + ")";
                            break;
                        }
                    //Important
                    case 2:
                        {
                            sqlStatement = "UPDATE Messages SET IsImportant = 1 - IsImportant WHERE [Id] IN (" + result + ")";
                            break;
                        }
                }
                uow.Connection.Query(sqlStatement);
            }
            catch (Exception e)
            {
                e.Log();
                response.IsSuccessful = false;
                response.error = e.Message;
                throw e;
            }

            return response;
        }

        [HttpPost]
        [WebMethod]
        [ValidateInput(false)]
        public JsonResult SendMessage(Message data, IUnitOfWork uow)
        {
            var idFrom = ((UserDefinition)Authorization.UserDefinition).UserId;
            var user = Dependency.Resolve<IUserRetrieveService>().ByUsername(data.to) as UserDefinition;
            if (user == null)
                throw new ValidationError("CantFindUserWithEmail", Texts.Validation.CantFindUserWithEmail);
            try
            {
                uow.Connection.Insert(new MyRow
                {
                    IdFrom = idFrom,
                    IdTo = user.UserId,
                    SendDate = DateTime.Now,
                    Message = data.message,
                    Subject = data.subject,
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
