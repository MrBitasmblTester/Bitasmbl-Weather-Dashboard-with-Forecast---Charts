// Controllers/WeatherController.cs
using Microsoft.AspNetCore.Mvc;
[ApiController]
[Route("api/weather")]
public class WeatherController : ControllerBase
{
    // TODO: inject WeatherService
    [HttpGet("current")] public IActionResult GetCurrent(string city) => Ok();
}