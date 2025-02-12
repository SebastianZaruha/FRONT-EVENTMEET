import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(public modalService: ModalService) {}

  isRegisterModalOpen = false;

  openRegisterModal() {
    this.isRegisterModalOpen = true;
  }

  closeRegisterModal() {
    this.isRegisterModalOpen = false;
  }

  closeModal() {
    this.modalService.closeModals();
  }
}
