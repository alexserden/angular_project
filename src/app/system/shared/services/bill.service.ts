import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../model/bill.model';


@Injectable()
export class BillService {
  constructor(private http: Http) {}

  getBill(): Observable<Bill> {
    return this.http.get('/bill')
      .map((response: Response) => response.json());
  }

  updateBill(bill: Bill): Observable<Bill> {
    return this.http.put('/bill', bill)
      .map((response: Response) => response.json());

  }
  getCurrency(base: string = 'UAH' ): Observable<any> {
      return this.http.get(`https://api.exchangerate-api.com/v4/latest/${base}`)
        .map((response: Response) => response.json());
  }
}
