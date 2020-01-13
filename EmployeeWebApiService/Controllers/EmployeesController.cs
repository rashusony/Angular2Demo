using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmployeeWebApiService.Controllers
{
   // [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmployeesController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using(EmployeeDBForWebApiEntities  entities = new EmployeeDBForWebApiEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (EmployeeDBForWebApiEntities entities = new EmployeeDBForWebApiEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.code==code);
            }
        }
    }
}
