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


--Criando a relação entre Departamento e Funcionarios
USE db_CrudEmpresa
CREATE TABLE Funcionario_Departamento( Id INT PRIMARY KEY NOT NULL)

ALTER TABLE Funcionario_Departamento
	ADD FuncionarioId INT NOT NULL
	CONSTRAINT fk_Funcionario
	FOREIGN KEY (FuncionarioId)
	REFERENCES dbo.Funcionario(Id)

ALTER TABLE Funcionario_Departamento
	ADD DepartamentoId INT NOT NULL
	CONSTRAINT fk_Departamento
	FOREIGN KEY (DepartamentoId)
	REFERENCES dbo.Departamento(Id)

ALTER TABLE Funcionario 
	ADD DepartamentoId int NOT NULL
	CONSTRAINT fk_departamentoId
	FOREIGN KEY (DepartamentoId)
	References dbo.Departamento(Id)

SELECT * FROM Funcionario


DELETE FROM Funcionario WHERE Id=1