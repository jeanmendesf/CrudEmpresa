import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Funcionario } from "../classes/funcionarioClasse";

@Injectable({
    providedIn: 'root'
})

export class FuncionarioService {
    readonly apiUrl = "https://localhost:44322/api";

    constructor(private http: HttpClient) { }


    ObterTodosFuncionarios(): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(this.apiUrl + '/funcionario');
    }


    AdicionarFuncionario(funcionario: Funcionario) {
        return this.http.post(this.apiUrl + '/funcionario/adicionar', funcionario);
    }

    AtualizarFuncionario(funcionario: Funcionario) {
        return this.http.put(this.apiUrl + '/funcionario/atualizar/' + funcionario.id, funcionario)
    }

    DeletarFuncionario(id: number) {
        return this.http.delete(this.apiUrl + '/funcionario/deletar/' + id);
    }

}