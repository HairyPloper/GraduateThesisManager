using Newtonsoft.Json;
using System;
using System.Web.Services;
using FluentMigrator.Builders.Delete.Column;
using GraduateThesisManager.Administration.Entities;
using GraduateThesisManager.Common.Entities;
using MVC;
using Serenity;
using MyRow = GraduateThesisManager.Administration.Entities.UserRow;
using uow = Serenity.Data.IUnitOfWork;

namespace GraduateThesisManager.Common.Endpoints
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;

    [RoutePrefix("Services/Common/Dashboard"), Route("{action}")]
    [ConnectionKey(typeof(MyRow))]
    public class DashboardController : ServiceEndpoint
    {

    }

}
