using CrudEmpresa.Data.DAL;
using CrudEmpresa.Model.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudEmpresa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartamentoController : ControllerBase
    {
        readonly DepartamentoDAL _departamentoDAL;


        public DepartamentoController()
        {
            _departamentoDAL = new DepartamentoDAL();
        }


        [HttpGet]
        [Route("")]
        public ActionResult ObterTodosDepartamentos()
        {
            IEnumerable<Departamento> listaDepartamentos;
            listaDepartamentos = _departamentoDAL.ObterDepartamentos();

            return Ok(listaDepartamentos);
        }

    }
}
