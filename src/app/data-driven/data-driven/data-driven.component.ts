import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormArray,
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
import { CustomValidators } from 'src/app/utils/validators';
import { VerificaEmailServiceService } from './services/verifica-email-service.service';

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
    private dropDownService: DropdownService,
    private verificaEmailService: VerificaEmailServiceService,
  ) {}
  ngOnDestroy(): void {
    this.cepService.getEstados();
  }

  form: FormGroup;
  estados: Observable<Estado[]>;
  cargos: Observable<Cargo[]>;
  newsLetterOp: Observable<any[]>;
  frameworks: string[];

  ngOnInit() {
    this.verificaEmailService.verificarEmail('').subscribe();

    this.estados = this.cepService.getEstados();
    this.cargos = this.dropDownService.getCargos();
    this.newsLetterOp = this.dropDownService.getNewsLetterOp();
    this.frameworks = this.dropDownService.getFrameworks();

    this.form = this.formBuilder.group({
      nome: ['Saulo', Validators.required],
      email: ['saul0kz@gmail.com', [Validators.required, Validators.email]],
      confirmarEmail: [, [CustomValidators.equalsTo('email')]],
      cargo: [null],
      endereco: this.formBuilder.group({
        cep: ['49042570', [Validators.required, Validators.minLength(8)] ],
        numero: [42, Validators.required],
        estado: ['SE', Validators.required],
        complemento: [null],
        rua: ['323', Validators.required],
      }),
      newsletter: [null],
      termos: [null, Validators.requiredTrue],
      frameworks: this.buildFramework(),
    });

    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pleno' };
    this.form.get('cargo')?.setValue(cargo);
  }

  buildFramework() {
    const values = this.frameworks.map((v) => new FormControl(null));
    return this.formBuilder.array(
      values,
      CustomValidators.requiredMinCheckbox(1)
    );
  }

  getFrameworksControls() {
    return this.form.get('frameworks')
      ? (<FormArray>this.form.get('frameworks')).controls
      : null;
  }
  get cepControl() {
    const endereco = this.form.get('endereco');
    return endereco?.get('cep');
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

  get frameworkFormGroups() {
    const values = this.form.get('frameworks') as FormArray;

    return values;
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
