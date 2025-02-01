import { Component } from '@angular/core';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}
