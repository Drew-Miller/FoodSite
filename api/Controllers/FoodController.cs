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
  [Route("/food")]
  public class FoodController : ControllerBase 
  {
    [HttpGet()]
    public IActionResult GetAll()
    {
      return Ok(FoodMock.Data);
    }

    [HttpGet("{id}")]
    public IActionResult GetById(string Id)
    {
      return Ok(FoodMock.Data.Where(f => f.Id == Guid.Parse(Id)).First());
    }
  }
}
