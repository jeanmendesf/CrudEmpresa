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
}