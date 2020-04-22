using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using BLL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using UnitOfWork;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        #region FIELDS

        private cUnitOfWork _UnitOfWork;
        private readonly IConfiguration _Configuration;

        #endregion

        #region CONSTRUCTORS

        public AuthController(cUnitOfWork unitOfWork, IConfiguration configuration)
        {
            _UnitOfWork = unitOfWork;
            _Configuration = configuration;
        }

        #endregion


        #region REPOSITORIES

        [HttpGet("authenticate")]
        public IActionResult Authenticate(String username, String password)
        {
            IActionResult response = Unauthorized();//set our response to unauthorized
            try
            {
                var user = _UnitOfWork.UserRepository.AuthenticateUser(username, password);//calling Auth method
                if (user != null)
                {
                    var tokenStr = GenerateJsonWebToken(user);
                    response = Ok(new { token = tokenStr });
                }
            }
            catch (Exception exception)
            {
                response = Problem(exception.Message);
            }
            return response;
        }


        private String GenerateJsonWebToken(cUser user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_Configuration["jwtAuth:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]{
                new Claim(JwtRegisteredClaimNames.Sub, user.Username),
                new Claim(JwtRegisteredClaimNames.Email, user.Password),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var token = new JwtSecurityToken(
                issuer: _Configuration["jwtAuth:Issuer"],
                audience: _Configuration["jwtAuth:Audience"],
                claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: credentials);
            var encodeToken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodeToken;
        }
        #endregion

    }
}