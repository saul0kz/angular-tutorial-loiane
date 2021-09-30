import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {password: 'Saulo', nome:'', email: 'email'};
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  logarUsuario() {
    this.authService.logarUsuario(this.usuario);
  }

}
