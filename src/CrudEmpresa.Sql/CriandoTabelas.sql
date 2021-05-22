CREATE DATABASE db_CrudEmpresa

--Criando tabela de Funcionarios =========================================
USE db_CrudEmpresa
CREATE TABLE Funcionario(
	Id INT PRIMARY KEY NOT NULL,
	Nome VARCHAR (250) NOT NULL,
	Cpf VARCHAR (11) NOT NULL,
	DataNascimento DATE NOT NULL
);

--Criando tabela de Departamento=========================================
USE db_CrudEmpresa
CREATE TABLE Departamento(
	Id INT PRIMARY KEY NOT NULL,
	Nome VARCHAR(100)
)

USE db_CrudEmpresa
INSERT INTO Departamento('Ti')