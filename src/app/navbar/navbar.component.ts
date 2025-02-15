import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; // Elimina ViewChild si no lo usas
import { Router } from '@angular/router'; // Importa Router
import { AuthService } from '../core/services/auth.service';
import { ModalService } from '../core/services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], // Añade InicioSesionComponent a los imports
  providers: [ModalService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    private modalService: ModalService,
    private router: Router // Inyecta Router
  ) {}

  menuOption: string = '';
  isMenuHidden: boolean = true;

  // @ViewChild(InicioSesionComponent) loginModal!: InicioSesionComponent; // Elimina si no lo usas

  openLoginModal() {
    this.modalService.openModal();
  }

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }

  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn(); // Corregido a isLoggedIn
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Usa Router para navegar
  }

  navigateToLogin() {
    this.authService.logout();
    this.router.navigate(['/login']); // Usa Router para navegar
  }
}
