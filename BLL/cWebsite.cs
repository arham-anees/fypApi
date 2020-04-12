using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
   public class cWebsite
    {
        public Int32 Id { get; set; }
        public String Name { get; set; }
        public String Domain { get; set; }
        public String ServerIp { get; set; }
        public String Username  { get; set; }
        public String Password { get; set; }
        public String Owner { get; set; }
        public String CurrentVersion { get; set; }
    }
}
