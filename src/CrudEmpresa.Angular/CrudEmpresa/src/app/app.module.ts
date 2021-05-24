import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObterDepartamentoComponent } from './departamento/obter-departamento/obter-departamento.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { RodapeComponent } from './navegacao/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    ObterDepartamentoComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
