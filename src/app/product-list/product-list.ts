import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {
  products: any ;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        console.log(data); // ✅ Shows in console
         this.products = data;
         console.log('this.products', this.products); // ✅ Shows in console
         return this.products;
      });
  }
}
