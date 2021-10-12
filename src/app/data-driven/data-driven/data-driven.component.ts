import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Cargo } from 'src/app/models/Cargo/cargo.model';
import { Endereco } from 'src/app/models/endereco/endereco';
import { Estado } from 'src/app/models/estado/estado.model';
import { CepService } from 'src/app/services/cep.service';
import { DropdownService } from 'src/app/services/dropdown.service';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss'],
})
export class DataDrivenComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: CepService,
    private dropDownService: DropdownService
  ) {}
  ngOnDestroy(): void {
    this.cepService.getEstados();
  }

  form: FormGroup;
  estados: Observable<Estado[]>;
  cargos: Observable<Cargo[]>;

  ngOnInit(): void {
    /*
    this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });
    */

    this.estados = this.cepService.getEstados();
    this.cargos = this.dropDownService.getCargos();

    /*
    this.cepService
      .getEstados()
      .subscribe((dados: Estado[]) => this.estados = dados);
      */

    this.form = this.formBuilder.group({
      nome: ['Saulo', Validators.required],
      email: ['saul0kz@gmail.com', [Validators.required, Validators.email]],
      cargo: [null],
      endereco: this.formBuilder.group({
        cep: ['49042570', Validators.required],
        numero: [42, Validators.required],
        estado: ['SE', Validators.required],
        complemento: [null],
        rua: ['323', Validators.required],
      }),
    });

    const cargo = {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno'};
    this.form.get('cargo')?.setValue(cargo);

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

  public compararCargos(obj1: Cargo, obj2: Cargo) {
    return obj1 && obj2 ? obj1.nivel == obj2.nivel : obj1 === obj2;
  }

  public consultaCEP() {
    const { endereco } = this.form.value;

    this.cepService.getEndereco(endereco.cep).subscribe((dados) => {
      const endereco: Endereco = JSON.parse(JSON.stringify(dados));
      this.populaDadosForm(endereco);
    });
  }

  populaDadosForm(dados: Endereco) {
    this.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
      },
    });
  }
}
