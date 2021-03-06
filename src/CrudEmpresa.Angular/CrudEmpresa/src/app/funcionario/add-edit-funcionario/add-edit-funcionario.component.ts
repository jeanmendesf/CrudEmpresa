import { DepartamentoService } from './../../servicos/departamento.service';
import { Departamento } from './../../classes/departamentoClasse';
import { Router } from '@angular/router';
import { FuncionarioService } from './../../servicos/funcionario.service';
import { Component, OnInit, Input } from '@angular/core';
import { Funcionario } from 'src/app/classes/funcionarioClasse';

@Component({
  selector: 'app-add-edit-funcionario',
  templateUrl: './add-edit-funcionario.component.html',
  styleUrls: ['./add-edit-funcionario.component.css']
})
export class AddEditFuncionarioComponent implements OnInit {

  constructor(
    private funcionarioService: FuncionarioService,
    private departamentoService: DepartamentoService,
    private rotas: Router
  ) { }

  ngOnInit(): void {
    this.novoFuncionario = this.funcionarioEditAdd;
    this.obterDepartamento();
    this.departamentoSelecionadoId = this.novoFuncionario.departamentoId;
  }

  //variáveis ----------------------------------------------------------------------------
  @Input() public funcionarioEditAdd!: Funcionario;
  public novoFuncionario!: Funcionario;
  public listaDepartamentos: Departamento[] = [];
  public departamentoSelecionadoId: number = 0;

  //Métodos ------------------------------------------------------------------------------
  adicionarFuncionario() {
    this.novoFuncionario.departamentoId = this.departamentoSelecionadoId;
    this.funcionarioService.AdicionarFuncionario(this.novoFuncionario)
      .subscribe(x => { this.rotas.navigate(['/funcionario']) })
  }

  atualizarFuncionario() {
    this.novoFuncionario.departamentoId = this.departamentoSelecionadoId;
    this.funcionarioService.AtualizarFuncionario(this.novoFuncionario)
      .subscribe(x => { this.rotas.navigate(['/funcionario']) })
  }

  updatedate(event: any) {
    this.novoFuncionario.dataNascimento = new Date(event);
  }

  obterDepartamento() {
    this.departamentoService.ObterTodosDepartamentos()
      .subscribe(departamentos => { this.listaDepartamentos = departamentos })
  }
  
}
