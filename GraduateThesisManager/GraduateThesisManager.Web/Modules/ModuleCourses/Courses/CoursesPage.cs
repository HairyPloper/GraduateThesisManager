
namespace GraduateThesisManager.ModuleCourses.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ModuleCourses/Courses"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CoursesRow))]
    public class CoursesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ModuleCourses/Courses/CoursesIndex.cshtml");
        }
    }
}