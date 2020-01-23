import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {WFMEvent} from '../model/event.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsService  {
  constructor(public http: Http) {

  }

  addEvent(event: WFMEvent): Observable<WFMEvent> {
    return this.http.post('http://localhost:3000/events', event)
      .map((response: Response) => response.json());
  }

  getEvents(): Observable<WFMEvent[]> {
    return this.http.get('http://localhost:3000/events')
      .map((response: Response) => response.json());
  }
}
