using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PersistenceLayer;

namespace Api.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
	    private AppDbContext _Context;

	    public UserController(AppDbContext context)
	    {
		    _Context = context;
	    }

	    public IEnumerable<cUser> GetAll()
	    {
		    return _Context.Users;
	    }

	    public cUser Authenticate()
	    {
		    return new cUser()
		    {
					FirstName = "first name",
					LastName = "last name",
					Password = "hashed",
					Username = "user name"
		    };
	    }
    }
}