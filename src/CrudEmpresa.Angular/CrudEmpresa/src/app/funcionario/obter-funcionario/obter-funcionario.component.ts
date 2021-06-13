import { Funcionario } from 'src/app/classes/funcionarioClasse';
import { DepartamentoService } from './../../servicos/departamento.service';
import { Departamento } from './../../classes/departamentoClasse';
import { FuncionarioService } from './../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obter-funcionario',
  templateUrl: './obter-funcionario.component.html',
  styleUrls: ['./obter-funcionario.component.css']
})
export class ObterFuncionarioComponent implements OnInit {

  constructor(
    private funcionarioService: FuncionarioService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.atualizarListaFuncionario();
  }

  //variáveis ----------------------------------------------------------------------------
  public funcionarios!: Funcionario[];
  public funcionarioEditAdd!: Funcionario;
  public tituloModal: string = "";
  public ativarAddEditFuncionario: boolean = false;

  public departamento!: Departamento;


  //Métodos ------------------------------------------------------------------------------
  atualizarListaFuncionario() {
    return this.funcionarioService.ObterTodosFuncionarios()
      .subscribe(lstFuncionario => { this.funcionarios = lstFuncionario });
  }

 

  adicionarFuncionario() {
    this.funcionarioEditAdd = { id: 0, nome: "", cpf: "", dataNascimento: new Date(), departamentoId: 0, departamento: { id: 0, nome: "" } };
    this.tituloModal = "Adicionar colaborador";
    this.ativarAddEditFuncionario = true;
    this.atualizarListaFuncionario();
  }

  atualizarFuncionario(funcionario: Funcionario) {
    this.funcionarioEditAdd = funcionario;
    this.tituloModal = "Editar funcionario";
    this.ativarAddEditFuncionario = true;
    this.atualizarListaFuncionario();
  }

  deletarFuncionario(funcionario: Funcionario) {
    if (confirm('Deseja mesmo deletar o funcionario ' + funcionario.nome + ' ?')) {
      this.funcionarioService.DeletarFuncionario(funcionario.id)
        .subscribe(x => { this.atualizarListaFuncionario() })
    }
  }

  fecharModal() {
    this.ativarAddEditFuncionario = false;
    this.atualizarListaFuncionario();
  }


}
