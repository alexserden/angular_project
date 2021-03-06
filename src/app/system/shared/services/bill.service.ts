import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../model/bill.model';


@Injectable()
export class BillService {
  constructor(private https: Http) {}

  getBill(): Observable<Bill> {
    return this.https.get('http://localhost:3000/bill')
      .map((response: Response) => response.json());
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.https.put('http://localhost:3000/bill', bill)
      .map((response: Response) => response.json());

  }
  getCurrency(base: string = 'UAH' ): Observable<any> {
      return this.https.get(`https://api.exchangerate-api.com/v4/latest/${base}`)
        .map((response: Response) => response.json());
  }
}
