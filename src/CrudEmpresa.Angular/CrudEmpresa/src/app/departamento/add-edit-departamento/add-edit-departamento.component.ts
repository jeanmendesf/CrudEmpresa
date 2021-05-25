import { DepartamentoService } from './../../servicos/departamento.service';
import { Departamento } from './../../classes/departamentoClasse';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-departamento',
  templateUrl: './add-edit-departamento.component.html',
  styleUrls: ['./add-edit-departamento.component.css']
})
export class AddEditDepartamentoComponent implements OnInit {

  constructor(
    private departamentoService: DepartamentoService,
    private rotas: Router) { }

  // Varíaveis
  @Input() departamentoEditAdd!: Departamento;
  public novoDepartamento!: Departamento;

  ngOnInit(): void {
    this.novoDepartamento = this.departamentoEditAdd;
  }

  //métodos
  adicionarDepartamento() {
    this.departamentoService.adicionarDepartamento(this.novoDepartamento)
      .subscribe(x => { this.rotas.navigate(['/departamento']) })
  }

  atualizarDepartamento() {
    this.departamentoService.atualizarDepartamento(this.novoDepartamento)
      .subscribe(x => { this.rotas.navigate(['/departamento']) })
  }  
}
