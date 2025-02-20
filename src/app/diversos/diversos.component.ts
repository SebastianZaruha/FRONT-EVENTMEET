import { NgFor } from '@angular/common';
import { EventEmitter, Input, Output, Component, OnInit  } from '@angular/core';
import { EventService } from '../../app/core/services/event..service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diversos',
  imports: [CommonModule],
  templateUrl: './diversos.component.html',
  styleUrl: './diversos.component.css'
})
export class DiversosComponent {
    @Input() data: any;
    @Output() dataEventEmit = new EventEmitter();
  
    cardsData: { image: string }[] = [];
    events: any[] = [];
  
    constructor(private eventService: EventService) {}
    ngOnInit(): void {
      this.eventService.getEvents().subscribe({
        next: (data) => {
          this.events = data;
        },
        error: (error) => {
          console.error('Error al obtener eventos:', error);
        },
      });
    }
}
