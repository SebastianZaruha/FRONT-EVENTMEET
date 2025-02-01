import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOption: string = '';
  isMenuHidden: boolean = true;

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
  toggleMenu() {
    this.isMenuHidden = !this.isMenuHidden;
  }
}
