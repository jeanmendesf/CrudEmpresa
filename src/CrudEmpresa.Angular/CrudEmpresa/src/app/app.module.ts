import { DepartamentoService } from './servicos/departamento.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObterDepartamentoComponent } from './departamento/obter-departamento/obter-departamento.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rotasConfig } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AddEditDepartamentoComponent } from './departamento/add-edit-departamento/add-edit-departamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ObterDepartamentoComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    AddEditDepartamentoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [RouterModule.forRoot(rotasConfig)]
  ],
  providers: [DepartamentoService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
