import { Routes } from '@angular/router';
import { ObterFuncionarioComponent } from './funcionario/obter-funcionario/obter-funcionario.component';
import { ObterDepartamentoComponent } from './departamento/obter-departamento/obter-departamento.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rotasConfig: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'departamento', component: ObterDepartamentoComponent },
    { path: 'funcionario', component: ObterFuncionarioComponent }
]