import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../models/curso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: Curso[] = [];

  pagina : number = 0;
  constructor(private cursosService: CursosService, private activedRoute: ActivatedRoute, private router: Router) {
  }

  subscription: Subscription = this.activedRoute.queryParams.subscribe((queryParams)=> {
    this.pagina = queryParams['pagina'];
  })

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
  proximaPagina() {
    this.router.navigate(['/curso'], {queryParams: {'pagina': ++this.pagina} })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
