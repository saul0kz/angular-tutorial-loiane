import { CepService } from './../../services/cep.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario/Usuario';
import { Endereco } from 'src/app/models/endereco/endereco';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor(private cepService: CepService) {}

  model = {
    left: true,
    middle: false,
    right: false,
  };

  usuario: Usuario = {
    nome: '',
    email: 'saul0kz@gmail.com',
    password: '',
  };

  ngOnInit(): void {}
  onSubmit(f: NgForm) {
    console.log(this.usuario);
    console.log(f.controls);
  }
  public consultaCEP(cep: NgModel, f: NgForm) {
    this.cepService.getEndereco(cep.value).subscribe((dados) => {
      const endereco: Endereco = JSON.parse(JSON.stringify(dados));
      this.populaDadosForm(endereco, f);
    });
  }
  populaDadosForm(dados: Endereco, form: NgForm) {
    form.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }
}
