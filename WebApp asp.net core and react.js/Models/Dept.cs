using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApp_asp.net_core_and_react.js.Models
{
    [Table("Depts")]
    public class Dept
    {
        [Key]
        [Required]
        public int DeptNo { get; set; }

        [MaxLength(50)]
        public string DName { get; set; }

        [MaxLength(50)]
        public string Location { get; set; }
    }
}
