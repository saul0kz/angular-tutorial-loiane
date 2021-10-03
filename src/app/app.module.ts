import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    NaoEncontradoComponent,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
