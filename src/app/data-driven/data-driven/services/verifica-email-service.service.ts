import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VerificaEmailServiceService {
  constructor(private http: HttpClient) {}
  verificarEmail(email: string) {
    return this.http.get('assets/dados/verificarEmail.json')
    .pipe(
      map((dados: any) => {
        return dados.emails;
      }),
      tap(console.log)
    );
  }
}
