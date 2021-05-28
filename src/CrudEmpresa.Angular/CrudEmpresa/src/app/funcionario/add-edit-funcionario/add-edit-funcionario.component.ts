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

  constructor(private funcionarioService: FuncionarioService,
    private rotas: Router) { }

  ngOnInit(): void {
    this.novoFuncionario = this.funcionarioEditAdd
  }

  //variáveis ----------------------------------------------------------------------------
  @Input() public funcionarioEditAdd!: Funcionario;
  public novoFuncionario!: Funcionario;

  //Métodos ------------------------------------------------------------------------------
  adicionarFuncionario() {
    this.funcionarioService.AdicionarFuncionario(this.novoFuncionario)
      .subscribe(x => { this.rotas.navigate(['/funcionario']) })
  }
}
