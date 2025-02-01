import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.css',
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // ! = non-null assertion operator

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  hasErrors(field: string, typeError: string) {
    return (
      this.contactForm.get(field)?.hasError(typeError) &&
      this.contactForm.get(field)?.touched
    );
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
