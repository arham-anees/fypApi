using System;
using System.Collections.Generic;
using System.Text;

namespace BLL
{
   public class cFiles
    {
        public Int32 Id { get; set; }
        public String Name { get; set; }
        public String Type { get; set; }
        public String Website { get; set; }
        public String UploadData { get; set; }
        public String LastModified { get; set; }
        public String Version { get; set; }
        public bool IsActive { get; set; }
    }
}
