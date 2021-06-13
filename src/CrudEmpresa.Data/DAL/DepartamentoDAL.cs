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


        public IEnumerable<Departamento> ObterTodosDepartamentos()
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
        
        
        public Departamento ObterDepartamentoPorId(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                Departamento departamento = new Departamento();

                SqlCommand cmd = new SqlCommand("SELECT * FROM dbo.Departamento WHERE Id =" + id, connection);
                cmd.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while(reader.Read())
                {
                    departamento.Id = Convert.ToInt32(reader["Id"]);
                    departamento.Nome = reader["Nome"].ToString();
                }

                connection.Close();
                return departamento;
            }
        }


        public void AdicionarDepartamento(Departamento departamento)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("INSERT INTO dbo.Departamento(Nome) VALUES(@Nome)",connection);
                cmd.CommandType = CommandType.Text;
                cmd.Parameters.AddWithValue("@Nome", departamento.Nome);

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }


        public void AtualizarDepartamento(Departamento departamento)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("UPDATE dbo.Departamento SET Nome=@Nome WHERE Id=@Id", connection);
                cmd.CommandType = CommandType.Text;

                cmd.Parameters.AddWithValue("@Id", departamento.Id);
                cmd.Parameters.AddWithValue("@Nome", departamento.Nome);

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }
            

        public void DeletarDepartamento(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("DELETE FROM dbo.Departamento WHERE Id= " + id, connection);
                cmd.CommandType = CommandType.Text;

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }


    }
}
