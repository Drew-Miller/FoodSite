using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Data;

namespace api.Controllers
{
  [ApiController]
  [Route("/lorem-ipsom")]
  public class LoremIpsomController : ControllerBase 
  {
    [HttpGet("{words}")]
    public IActionResult Get(int words)
    {
        return new JsonResult(LoremIpsomMock.Get(words));
    }
  }
}
