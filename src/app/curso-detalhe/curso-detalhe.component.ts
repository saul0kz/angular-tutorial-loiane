import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  getParams = (params: Params) => {
    this.id = params.id;
  };

  subscription: Subscription = this.route.params.subscribe(this.getParams);

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
