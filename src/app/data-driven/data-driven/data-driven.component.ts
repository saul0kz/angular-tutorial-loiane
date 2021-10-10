import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.scss'],
})
export class DataDrivenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;


  ngOnInit(): void {
    /*
    this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });
    */
   this.form = this.formBuilder.group({
     nome: [null],
     email: [null]
   })
   console.log(this.form);
  }
}
