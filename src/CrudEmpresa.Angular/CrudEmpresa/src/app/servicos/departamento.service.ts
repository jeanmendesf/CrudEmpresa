import { Departamento } from './../classes/departamentoClasse';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DepartamentoService {

    readonly apiUrl = "https://localhost:44322/api";

    constructor(private http: HttpClient) { }


    ObterTodosDepartamentos(): Observable<Departamento[]> {
        return this.http.get<Departamento[]>(this.apiUrl + '/departamento')
    }

    adicionarDepartamento(departamento: Departamento) {
        return this.http.post(this.apiUrl + '/departamento/adicionar', departamento);
    }

    atualizarDepartamento(departamento: Departamento) {
        return this.http.put(this.apiUrl + '/departamento/atualizar/' + departamento.id, departamento);
    }

    deletarDepartamento(id: number) {
        return this.http.delete(this.apiUrl + '/departamento/deletar/' + id)
    }

}