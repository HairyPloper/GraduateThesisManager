
using System.Collections.Generic;

namespace GraduateThesisManager.Common.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.MessagesRow;

    public class MessagesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.IdFrom = Int32.Parse(Authorization.UserId);
            request.Entity.SendDate = DateTime.Now;
            request.Entity.IsChecked = request.Entity.IsChecked ?? false;
            request.Entity.IsImportant = request.Entity.IsImportant ?? false;
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            EnsureOwnership(uow.Connection, request.EntityId);
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            EnsureOwnership(uow.Connection, request.EntityId);
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            EnsureOwnership(connection, request.EntityId);
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            request.EqualityFilter = request.EqualityFilter ?? new Dictionary<string, object>();

            object direction;
            request.EqualityFilter.TryGetValue("SentReacived", out direction);

            if (Convert.ToString(direction) == "1") // 1 = received
                request.EqualityFilter["IdTo"] = Authorization.UserId;
            else
                request.EqualityFilter["IdFrom"] = Authorization.UserId; // 0 = sent

            request.EqualityFilter.Remove("SentReacived");

            return new MyListHandler().Process(connection, request);
        }

        private static void EnsureOwnership(IDbConnection connection, object entityId)
        {
            var userId = Int32.Parse(Authorization.UserId);
            var messageId = Convert.ToInt32(entityId);
            var belongsToUser = connection.Exists<MyRow>(
                fld.Id == messageId &
                (fld.IdFrom == userId | fld.IdTo == userId));

            if (!belongsToUser)
                throw new ValidationError("AccessDenied", "Message not found or access denied.");
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                //if (!Request.Genres.IsEmptyOrNull())
                //{
                //    var mg = Entities.MovieGenresRow.Fields.As("mg");

                //    query.Where(Criteria.Exists(
                //        query.SubQuery()
                //            .From(mg)
                //            .Select("1")
                //            .Where(
                //                mg.MovieId == fld.MovieId &&
                //                mg.GenreId.In(Request.Genres))
                //            .ToString()));
                //}
            }
        }
    }
}
