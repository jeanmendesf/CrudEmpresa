using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using CrudEmpresa.Model.Models;

namespace CrudEmpresa.Data.DAL
{
    public class DepartamentoDAL
    {
        string connectionString = @"Data Source =  DESKTOP-9D3IEDO\SQLEXPRESS01;
                                    Initial Catalog = db_CrudEmpresa; Integrated Security=True";

        public IEnumerable<Departamento> ObterDepartamentos()
        {
            List<Departamento> listaDepartamentos = new List<Departamento>();
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("SELECT * FROM dbo.Departamento", connection );
                cmd.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Departamento departamento = new Departamento();

                    departamento.Id = Convert.ToInt32(reader["Id"]);
                    departamento.Nome = reader["Nome"].ToString();

                    listaDepartamentos.Add(departamento);
                }

                connection.Close();
                return listaDepartamentos;
            }
        }
    
    
    }
}
