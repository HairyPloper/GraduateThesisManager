
namespace GraduateThesisManager.ModuleCourses.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ModuleCourses/Modules"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ModulesRow))]
    public class ModulesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ModuleCourses/Modules/ModulesIndex.cshtml");
        }
    }
}