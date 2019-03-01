using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularLearn.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static Random rng = new Random(15);
        private static List<WeatherForecast> forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
            TemperatureC = rng.Next(-20, 55),
            Summary = Summaries[rng.Next(Summaries.Length)]
        }).ToList();

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            return forecasts;
        }
        [HttpPost("[action]")]
        public IEnumerable<WeatherForecast> AddWeatherForecast([FromBody]WeatherForecast forecast)
        {
            forecasts.Add(forecast);
            return forecasts;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int? TemperatureC { get; set; }
            public string Summary { get; set; }
        }
    }
}
