using System;
using System.Collections.Generic;
using System.Text;

namespace CrudEmpresa.Model.Models
{
    public class Funcionario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }


        public Departamento Departamento { get; set; }
        public int DepartamentoId { get; set; }
    }
}
