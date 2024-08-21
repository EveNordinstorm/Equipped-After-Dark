import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(category: string, sort?: string, type?: string): Observable<Product[]> {
    let params = new HttpParams().set('category', category);

    if (sort) {
      params = params.set('sort', sort);
    }

    if (type) {
      params = params.set('type', type);
    }

    return this.http.get<Product[]>(this.apiUrl, { params });
  }
}
