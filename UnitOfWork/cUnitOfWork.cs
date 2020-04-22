using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using PersistenceLayer;
using Repositories;

namespace UnitOfWork
{
    public class cUnitOfWork
    {

        #region FIELDS

        private AppDbContext _context; 
        private cUserRepository _userRepository;



        #endregion

        #region CONSTRUCTOR

        public cUnitOfWork(AppDbContext context)
        {
            _context = context;
        }

        #endregion

        #region PROPERTIES

        public cUserRepository UserRepository => _userRepository ?? (_userRepository = new cUserRepository(_context));

        #endregion

    }
}
