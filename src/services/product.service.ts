import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://equippedafterdark.azurewebsites.net/api/products';

  constructor(private http: HttpClient) {}

  // Get all products with optional filtering
  getProducts(category?: string, sort?: string, type?: string, search?: string, includeAll: boolean = false): Observable<Product[]> {
    let params = new HttpParams();

    // If includeAll is true, we won't set the category in the params
    if (!includeAll && category) {
      params = params.set('category', category);
    }
    if (sort) {
      params = params.set('sort', sort);
    }
    if (type) {
      params = params.set('type', type);
    }
    if (search) {
      params = params.set('search', search);
    }

    console.log('HTTP Params:', params.toString());

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // Get single product by ID
  getProductById(id: string): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }
}
