using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp_asp.net_core_and_react.js.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApp_asp.net_core_and_react.js.DAL
{
    public class CompanyDbContext : DbContext
    {
        public DbSet<Dept> Depts { get; set; }

        public CompanyDbContext():base()
        {

        }

        public CompanyDbContext(DbContextOptions options):base(options)
        {

        }
    }
}
