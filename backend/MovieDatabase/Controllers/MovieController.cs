using Microsoft.AspNetCore.Mvc;
using MovieDatabase.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieDatabase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;
        public MovieController(MovieDBContext temp) {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies.ToArray();

            return context.Movies.ToArray();
        }
    }
}
