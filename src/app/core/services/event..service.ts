import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:3000/v1/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`).pipe(
      catchError((error) => {
        console.error('Error fetching events:', error);
        return throwError(() => new Error('Error fetching events'));
      })
    );
  }

  getEventById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/event/${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching event:', error);
        return throwError(() => new Error('Error fetching event'));
      })
    );
  }

  filterEvents(filters: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/filter`, filters);
  }
}
