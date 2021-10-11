import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss'],
})
export class DataDrivenComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  form: FormGroup;

  ngOnInit(): void {
    /*
    this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });
    */
    this.form = this.formBuilder.group({
      nome: ['Saulo', Validators.required],
      email: ['saul0kz@gmail.com', [Validators.required, Validators.email]],
      cep:  ['49042570', Validators.required ],
      numero:  [42, Validators.required],
      complemento:  [null],
      rua:  ['323', Validators.required],
    });
    console.log(this.form);
  }
  submit() {
    let valueSubmit = Object.assign({}, this.form.value);

    this.http
      .post('https://httpbin.org/post', JSON.stringify(valueSubmit))
      .subscribe(
        (dados) => {
          console.log(dados);
          //    this.form.reset();
        },
        (error: any) => alert('erro')
      );
  }

  cancelar() {
    this.form.reset();
  }
}
