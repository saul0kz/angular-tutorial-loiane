import { CursosModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, HeaderComponent, NaoEncontradoComponent],
  imports: [BrowserModule,  AppRoutingModule, CursosModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
