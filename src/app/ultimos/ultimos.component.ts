import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ultimos',
  imports: [NgFor],
  templateUrl: './ultimos.component.html',
  styleUrl: './ultimos.component.css',
})
export class UltimosComponent {
  @Input() data: any;
  @Output() dataEventEmit = new EventEmitter();

  cardsData: { image: string }[] = [];
}
