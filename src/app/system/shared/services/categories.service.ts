import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Category} from '../model/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService {
  constructor(public http: Http) {

  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post('https://localhost:3000//categories', category)
      .map((response: Response) => response.json());
  }

  getCategories(): Observable<Category[]> {
    return this.http.get('https://localhost:3000//categories')
      .map((response: Response) => response.json());
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put(`https://angular-review-varus.herokuapp.com/categories/${category.id}`, category)
      .map((response: Response) => response.json());
  }
}
