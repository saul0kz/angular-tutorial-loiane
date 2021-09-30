import { Usuario } from './../../models/usuario/Usuario';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  queryParams = { pagina: 1 };
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {
    this.mostrarMenu = this.authService.getIsLogado();
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrarMenu) => (this.mostrarMenu = mostrarMenu)
    );
  }
  ngOnDestroy(): void {
    this.authService.mostrarMenuEmitter.unsubscribe();
  }
  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
