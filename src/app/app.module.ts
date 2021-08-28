import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CursosComponent, LoginComponent],
  imports: [BrowserModule, MaterializeButtonModule, MaterializeCardModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
