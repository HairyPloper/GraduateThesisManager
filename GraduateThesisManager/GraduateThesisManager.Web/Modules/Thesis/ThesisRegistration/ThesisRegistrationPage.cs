
namespace GraduateThesisManager.Thesis.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Thesis/ThesisRegistration"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ThesisRegistrationRow))]
    public class ThesisRegistrationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Thesis/ThesisRegistration/ThesisRegistrationIndex.cshtml");
        }
    }
}