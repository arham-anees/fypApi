using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
    public class cUser
    {
		#region Properties
		public Int32 Id { get; set; }
		public String FirstName { get; set; }
		public String MiddleName { get; set; }
		public String LastName { get; set; }
		public String Username { get; set; }
		public String Password { get; set; }
		public String Email { get; set; }
		public String Phone { get; set; }
		public String City { get; set; }
		public String Address{ get; set; }

		public cUserRole userRole { get; set; }

		#endregion

		#region Methods

		public void Add() { }

		#endregion

	}
}
