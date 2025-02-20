// src/app/event-detail/event-detail.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../app/core/services/event..service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit {
  event: any = null;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const path = window.location.pathname;
    const segments = path.split('/');
    const eventId = segments[segments.length - 1];
    console.log(eventId)
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe({
        next: (data) => {
          this.event = data;
          console.log(data)
        },
        error: (error) => {
          console.error('Error fetching event:', error);
        },
      });
    }
  }
}