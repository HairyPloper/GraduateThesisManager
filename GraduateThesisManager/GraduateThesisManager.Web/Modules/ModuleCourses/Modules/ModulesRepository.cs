
using System.Linq;
using GraduateThesisManager.ModuleCourses.Entities;

namespace GraduateThesisManager.ModuleCourses.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ModulesRow;

    public class ModulesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Row.CoursesList != null)
                {
                    var my = ModulesCoursesRow.Fields;

                    if (Row.Id != null)
                    {
                        var oldList = IsCreate
                            ? null
                            : Connection.List<ModulesCoursesRow>(my.ModuleId == Row.Id.Value);

                        new Common.DetailListSaveHandler<ModulesCoursesRow>(oldList, Row.CoursesList, x =>
                        {
                            if (Row.Id != null) x.ModuleId = Row.Id.Value;
                        }).Process(this.UnitOfWork);
                    }
                }
            }
        }

        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void OnBeforeDelete()
            {
                base.OnBeforeDelete();
                var mc = ModulesCoursesRow.Fields;
                if (Row.Id != null)
                {
                    foreach (var item in Connection.Query<Int32>(
                        new SqlQuery()
                            .From(mc)
                            .Select(mc.Id)
                            .Where(mc.ModuleId == Row.Id.Value)))
                    {
                        new DeleteRequestHandler<ModulesCoursesRow>().Process(this.UnitOfWork,
                            new DeleteRequest
                            {
                                EntityId = item
                            });
                    }
                }
            }
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();
                var mc = ModulesCoursesRow.Fields;
                Row.CoursesList = Connection.List<ModulesCoursesRow>(q =>
                {
                    if (Row.Id != null)
                        q.SelectTableFields()
                            .Select(mc.CourseCourseName, mc.CourseYear, mc.CourseSemester, mc.CourseCourseDescription)
                            .Where(mc.ModuleId== Row.Id.Value);
                }).OrderBy(x => x.CourseCourseName).ToList();
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}