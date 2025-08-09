// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpResource } from './http-resource';
import { Observable } from 'rxjs';
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
   rating: {
    rate: number;
    count: number;
  };
}
@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private resource: HttpResource<Product>) {}

  getProducts(): Observable<Product[]> {
    return this.resource.getAll(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.resource.getOne(this.baseUrl, id);
  }
}



