import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, CursosComponent, LoginComponent, HeaderComponent, CursoDetalheComponent, NaoEncontradoComponent],
  imports: [BrowserModule,  AppRoutingModule],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
