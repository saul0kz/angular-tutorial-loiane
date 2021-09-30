import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../models/usuario/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public mostrarMenuEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}

  private isLogado : boolean = true;

  public logarUsuario(usuario: Usuario) {
    this.isLogado = true;
    this.mostrarMenuEmitter.emit(this.isLogado);
    this.router.navigate(['/curso'], {queryParams: {'pagina': 1}});
  }
  public logout() {
    this.isLogado = false;
    this.mostrarMenuEmitter.emit(this.isLogado);
    this.router.navigate(['/']);
  }
  public getIsLogado() {
    return this.isLogado;
  }
}
