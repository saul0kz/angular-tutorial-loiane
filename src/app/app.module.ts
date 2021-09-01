import { CursosService } from './cursos/cursos.service';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeButtonModule, MaterializeCardModule, MaterializeNavbarModule } from 'materialize-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CursosComponent, LoginComponent, HeaderComponent, CursoDetalheComponent, NaoEncontradoComponent],
  imports: [BrowserModule,  routing],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
