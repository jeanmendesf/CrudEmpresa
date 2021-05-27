using CrudEmpresa.Model.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace CrudEmpresa.Data.DAL
{
    public class FuncionarioDAL
    {
        string connectionString = @"Data Source =  DESKTOP-9D3IEDO\SQLEXPRESS01;
                                    Initial Catalog = db_CrudEmpresa; Integrated Security=True";

        public IEnumerable<Funcionario> ObterTodosFuncionarios()
        {
            List<Funcionario> listaFuncionarios = new List<Funcionario>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("SELECT * FROM dbo.Funcionario", connection);
                cmd.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while(reader.Read())
                {
                    Funcionario funcionario = new Funcionario();

                    funcionario.Id = Convert.ToInt32(reader["Id"]);
                    funcionario.Nome = reader["Nome"].ToString();
                    funcionario.Cpf = reader["Cpf"].ToString();
                    funcionario.DataNascimento = Convert.ToDateTime(reader["DataNascimento"]);

                    listaFuncionarios.Add(funcionario);
                }
                connection.Close();
            }
            return listaFuncionarios;
        }


        public Funcionario ObterFuncionarioPorId(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                Funcionario funcionario = new Funcionario();

                SqlCommand cmd = new SqlCommand("SELECT * FROM dbo.Funcionario WHERE Id = " +id, connection);
                cmd.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    funcionario.Id = Convert.ToInt32(reader["Id"]);
                    funcionario.Nome = reader["Nome"].ToString();
                    funcionario.Cpf = reader["Cpf"].ToString();
                    funcionario.DataNascimento = Convert.ToDateTime(reader["DataNascimento"]);
                }
                return funcionario;
            }
        }


        public void AdicionarFuncionario(Funcionario funcionario)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("INSERT INTO dbo.Funcionario(Nome, Cpf, DataNascimento) VALUES(@Nome, @Cpf, @DataNascimento)", connection);
                cmd.CommandType = CommandType.Text;

                cmd.Parameters.AddWithValue("@Nome", funcionario.Nome);
                cmd.Parameters.AddWithValue("@Cpf", funcionario.Cpf);
                cmd.Parameters.AddWithValue("@DataNascimento", funcionario.DataNascimento);

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }


        public void AtualizarFuncionario(Funcionario funcionario)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("UPDATE dbo.Funcionario SET Nome=@Nome, Cpf=@Cpf, DataNascimento=@DataNascimento WHERE Id=@Id", connection);
                cmd.CommandType = CommandType.Text;

                cmd.Parameters.AddWithValue("@Id", funcionario.Id);
                cmd.Parameters.AddWithValue("@Nome", funcionario.Nome);
                cmd.Parameters.AddWithValue("@Cpf", funcionario.Cpf);
                cmd.Parameters.AddWithValue("@DataNascimento", funcionario.DataNascimento);

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }


        public void DeletarDepartamento(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand cmd = new SqlCommand("DELETE FROM dbo.Funcionario WHERE Id= " + id, connection);
                cmd.CommandType = CommandType.Text;

                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();
            }
        }


    }
}
