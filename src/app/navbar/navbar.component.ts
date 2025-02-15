import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import InicioSesionComponent from '../pages/inicio-sesion/inicio-sesion.component';
import { AuthService } from '../core/services/auth.service';
import { ModalService } from '../core/services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  providers: [ModalService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}
  
  menuOption: string = '';
  isMenuHidden: boolean = true;
  
  @ViewChild(InicioSesionComponent) loginModal!: InicioSesionComponent;
  
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
    return this.authService.isAuthenticaded();
    
  }
  
  logout() {
    this.authService.logout();
  }
  navigateToLogin() {
    this.authService.logout();
    window.location.href = '/login';
  }
}
