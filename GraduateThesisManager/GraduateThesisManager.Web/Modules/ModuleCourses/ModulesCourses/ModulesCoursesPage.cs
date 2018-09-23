
namespace GraduateThesisManager.ModuleCourses.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ModuleCourses/ModulesCourses"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ModulesCoursesRow))]
    public class ModulesCoursesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ModuleCourses/ModulesCourses/ModulesCoursesIndex.cshtml");
        }
    }
}