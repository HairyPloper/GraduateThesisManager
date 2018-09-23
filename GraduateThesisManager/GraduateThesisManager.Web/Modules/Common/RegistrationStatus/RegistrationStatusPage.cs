
namespace GraduateThesisManager.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Common/RegistrationStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RegistrationStatusRow))]
    public class RegistrationStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Common/RegistrationStatus/RegistrationStatusIndex.cshtml");
        }
    }
}