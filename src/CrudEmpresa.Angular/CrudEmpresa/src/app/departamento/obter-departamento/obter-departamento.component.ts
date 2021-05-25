import { Departamento } from './../../classes/departamentoClasse';
import { DepartamentoService } from './../../servicos/departamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obter-departamento',
  templateUrl: './obter-departamento.component.html',
  styleUrls: ['./obter-departamento.component.css']
})
export class ObterDepartamentoComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService,
    private rotas: Router) { }

  ngOnInit(): void { this.atualizarListaDepartamentos(); }


  //variáveis ----------------------------------------------------------------------------
  public departamentos!: Departamento[];
  public departamento!: Departamento;
  public departamentoEditAdd!: Departamento;
  public tituloModal: string = "";
  public ativarAddEditDepartamento: boolean = false;

  //Métodos ------------------------------------------------------------------------------
  atualizarListaDepartamentos() {
    this.departamentoService.ObterTodosDepartamentos()
      .subscribe(lstDepartamentos => { this.departamentos = lstDepartamentos });
  }

  adicionarDepartamento() {
    this.departamentoEditAdd = { id: 0, nome: "" };
    this.tituloModal = "Adicionar departamento";
    this.ativarAddEditDepartamento = true;
    this.atualizarListaDepartamentos();
  }

  atualizarDepartamento(departamentoEdit: Departamento) {
    this.departamentoEditAdd = departamentoEdit;
    this.tituloModal = "Editar departamento"
    this.ativarAddEditDepartamento = true;
    this.atualizarListaDepartamentos();
  }

  deletarDepartamento(departamento: Departamento) {
    if (confirm('Deseja mesmo deletar?')) {
      this.departamentoService.deletarDepartamento(departamento.id)
        .subscribe(x => { this.atualizarListaDepartamentos() })
    }
  }

  fecharModal() {
    this.ativarAddEditDepartamento = false;
    this.atualizarListaDepartamentos();
  }
}
