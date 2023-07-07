using Microsoft.AspNetCore.Mvc;

namespace DemoReact.Controllers
{
    public class ItemController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
