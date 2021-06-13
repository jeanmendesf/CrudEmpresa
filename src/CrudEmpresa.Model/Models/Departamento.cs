using System;
using System.Collections.Generic;
using System.Text;

namespace CrudEmpresa.Model.Models
{
    public class Departamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }


        public List<Funcionario> Funcionarios{ get; set; }
    }
}
