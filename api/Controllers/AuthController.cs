using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CodeActions;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Repositories;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace api.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
	    private IConfiguration _Configuration;
	    private cUserRepository _UserRepository;


	    public AuthController(IConfiguration configuration)
	    {
		    _Configuration = configuration;
	    }

	    public IActionResult Login(String username, String password)
	    {
		    var user = new {Username = username, Password = password};
				_UserRepository.AuthenticateUser();

				IActionResult response = Unauthorized();

				if (user != null)
				{
					var tokenStr = GenerateWebToken();
					response = Ok(new {token = tokenStr});
				}
		    return response;
	    }



	    private string GenerateWebToken()
	    {
		    var user = new {Userame = "username", Password = "password"};
		    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_Configuration["jwt:Key"]));
				var credentials=new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

				var claims = new[]
				{
					new Claim(JwtRegisteredClaimNames.Sub, user.Userame),
					new Claim(JwtRegisteredClaimNames.Email, user.Password),
					new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
				};

				var token=new JwtSecurityToken(
					issuer:_Configuration["jwt:Issuer"],
					audience:_Configuration["jwt:Issuer"],
					claims,
					DateTime.Now,
					DateTime.Now.AddHours(8),
					credentials);
				var encodeToken=new JwtSecurityTokenHandler().WriteToken(token);
				return encodeToken;
	    }
    }
}