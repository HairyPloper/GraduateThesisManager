
namespace GraduateThesisManager.Common.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Common/Messages"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MessagesRow))]
    public class MessagesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Common/Messages/MessagesIndex.cshtml");
        }
    }
}