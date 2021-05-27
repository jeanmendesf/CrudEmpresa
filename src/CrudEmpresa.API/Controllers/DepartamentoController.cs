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
            listaDepartamentos = _departamentoDAL.ObterTodosDepartamentos();

            return Ok(listaDepartamentos);
        }


        [HttpGet]
        [Route("{id:int}")]
        public ActionResult ObterDepartamentoPorId(int id)
        {
            Departamento departamento = new Departamento();
            departamento = _departamentoDAL.ObterDiretorPorId(id);

            return Ok(departamento);
        }


        [HttpPost]
        [Route("adicionar")]
        public ActionResult AdicionarDepartamento(Departamento departamento)
        {
            _departamentoDAL.AdicionarDepartamento(departamento);
            return Ok();
        }


        [HttpPut]
        [Route("atualizar/{id:int}")]
        public ActionResult AtualizarDepartamento(Departamento departamento)
        {
            _departamentoDAL.AtualizarDepartamento(departamento);

            return Ok();
        }


        [HttpDelete]
        [Route("deletar/{id:int}")]
        public ActionResult DeletarDepartamento(int id)
        {
            _departamentoDAL.DeletarDepartamento(id);

            return Ok();
        }
    }
}
