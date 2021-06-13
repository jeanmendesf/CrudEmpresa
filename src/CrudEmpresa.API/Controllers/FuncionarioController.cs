using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudEmpresa.Data.DAL;
using CrudEmpresa.Model.Models;
using Microsoft.AspNetCore.Mvc;

namespace CrudEmpresa.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        readonly FuncionarioDAL _funcionarioDAL;
        readonly DepartamentoDAL _departamentoDAL;

        public FuncionarioController()
        {
            _funcionarioDAL = new FuncionarioDAL();
            _departamentoDAL = new DepartamentoDAL();
        }


        [HttpGet]
        [Route("")]
        public ActionResult ObterTodosFuncionarios()
        {
            IEnumerable<Funcionario> listaFuncionarios;
            listaFuncionarios = _funcionarioDAL.ObterTodosFuncionarios();

            foreach (Funcionario funcionario in listaFuncionarios)
            {
                funcionario.Departamento = _departamentoDAL.ObterDepartamentoPorId(funcionario.DepartamentoId);
            }

            return Ok(listaFuncionarios);
        }


        [HttpGet]
        [Route("{id:int}")]
        public ActionResult ObterFuncionarioPorId(int id)
        {
            Funcionario funcionario = new Funcionario();

            funcionario = _funcionarioDAL.ObterFuncionarioPorId(id);
            return Ok(funcionario);
        }


        [HttpPost]
        [Route("adicionar")]
        public ActionResult AdicionarFuncionario(Funcionario funcionario)
        {
            _funcionarioDAL.AdicionarFuncionario(funcionario);
            return Ok();
        }


        [HttpPut]
        [Route("atualizar/{id:int}")]
        public ActionResult AtualizarFuncionario(Funcionario funcionario)
        {
            _funcionarioDAL.AtualizarFuncionario(funcionario);
            return Ok(funcionario);
        }


        [HttpDelete]
        [Route("deletar/{id:int}")]
        public ActionResult DeletarDepartamento(int id)
        {
            _funcionarioDAL.DeletarDepartamento(id);
            return Ok();
        }
    

        
    }
}
