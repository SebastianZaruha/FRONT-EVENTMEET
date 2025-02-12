import { Component } from '@angular/core';
import { EventDetailComponent } from '../../event-detail/event-detail.component';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-eventdetail',
  imports: [FooterComponent, EventDetailComponent, NavbarComponent],
  templateUrl: './eventdetail.component.html',
  styleUrl: './eventdetail.component.css',
})
export class EventdetailComponent {}
