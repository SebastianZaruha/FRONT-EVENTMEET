import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:3000/v1/events';

  private apiUrl2 = 'http://localhost:3000/v1/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`); 
  }

  filterEvents(filters: {
    location?: string;
    date?: string;
    interests?: string;
    maxPrice?: number;
  }): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl2}/events/filter`, filters);
  }
}
