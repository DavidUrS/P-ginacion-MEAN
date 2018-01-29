import { Category } from './../Category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ('rxjs/Rx');

@Injectable()

export class CategoryService {

  domain: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
getCategories() {
    return this.http.get<Category[]>(`${this.domain}/api`).map(res => res);
  }

}
