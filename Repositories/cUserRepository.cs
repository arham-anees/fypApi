using System;
using System.Collections.Generic;
using System.Text;
using BLL;
using PersistenceLayer;

namespace Repositories {
	public class cUserRepository : cRepository<cUser>
    {
        private AppDbContext _context;

        public cUserRepository(AppDbContext context)
        {
            _context = context;
        }

        public cUser AuthenticateUser(String username, String password)
        {
            if (username == password)
                return new cUser()
                {
                    FirstName = "firstName",
                    LastName = "lastName",
                    Username = username,
                    Password = password
                };
            return null;

        }
	}
}
