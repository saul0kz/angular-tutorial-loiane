import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/Usuario';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}

  usuario: Usuario = {
    nome: 'saulo',
    email: 'saul0kz@gmail.com',
    password: '',
  };

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(this.usuario);
    console.log(f);
  }
}
