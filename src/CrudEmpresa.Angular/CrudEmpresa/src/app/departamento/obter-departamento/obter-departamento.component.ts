import { Departamento } from './../../classes/departamentoClasse';
import { DepartamentoService } from './../../servicos/departamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obter-departamento',
  templateUrl: './obter-departamento.component.html',
  styleUrls: ['./obter-departamento.component.css']
})
export class ObterDepartamentoComponent implements OnInit {

  constructor(private departamentoService: DepartamentoService) { }
  ngOnInit(): void {
    this.atualizarDepartamentos();
  }

  //variáveis:
  public departamentos!: Departamento[];
  public departamento!: Departamento;



  //Métodos ------------------------------------------------------------------------------
  atualizarDepartamentos() {
    this.departamentoService.ObterTodosDepartamentos()
      .subscribe(lstDepartamentos => { this.departamentos = lstDepartamentos });
  }
}
