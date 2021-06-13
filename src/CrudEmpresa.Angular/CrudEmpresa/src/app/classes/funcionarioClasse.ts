import { Departamento } from './departamentoClasse';
export class Funcionario {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string,
        public dataNascimento: Date,
        public departamentoId: number,
        public departamento: Departamento
    ) { }
}