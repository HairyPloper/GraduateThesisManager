
namespace GraduateThesisManager.Thesis.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Thesis/ThesisPool"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ThesisPoolRow))]
    public class ThesisPoolController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Thesis/ThesisPool/ThesisPoolIndex.cshtml");
        }
    }
}