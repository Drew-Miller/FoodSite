using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
  [ApiController]
  public class ApiController : ControllerBase 
  {
    [Route("/")]
    [Route("/hello")]
    [Route("/test")]
    public IActionResult Test()
    {
      return Ok("Hello World!");
    }
  }
}
