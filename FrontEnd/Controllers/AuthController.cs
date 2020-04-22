using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UnitOfWork;

namespace FrontEnd.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private cUnitOfWork unitOfWork;

        public AuthController(cUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet("Authenticate")]
        public cUser Authenticate(String username, String password)
        {
            return new cUser() { FirstName = "first name", LastName = "last name", Password = password, Username = username};
        }

    }
}