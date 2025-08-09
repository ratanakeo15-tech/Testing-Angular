import { ChangeDetectionStrategy, Component, Inject, OnInit, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product, ProductService } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  
  protected products = signal<Product[]>([]);

  //protected products: Product[] = [];

  //Senior coding

  // private productId: any;
  // constructor(private http: HttpClient, 
  //   private productService: ProductService,
  //   private route: ActivatedRoute) {
  //    console.log('param:', this.route.params);
  //    console.log('query param:', this.route.queryParams);

  //   this.productId = this.route.snapshot.paramMap.get('id') || '';
  //   console.log('id:', this.productId)

  // }

  // ngOnInit(): void {
  //   const productId = this.route.snapshot.paramMap.get('id');
  //   if(this.productId !== ''){
  //     this.productService.getProduct(this.productId).subscribe({
  //       next:(data) => {
  //           console.log('data', data);
  //           this.products = [];
  //           this.products.push(data)
  //       }
  //     })
  //   }else{
  //     this.http.get<any[]>('https://fakestoreapi.com/products')
  //     .subscribe(data => {
  //       console.log(data); // ✅ Shows in console
  //        this.products = data;
  //        console.log('this.products', this.products); // ✅ Shows in console
  //        return this.products;
  //     });
  //   }
  // }

  //My testing
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Subscribe so it reacts if params change
    this.route.params.subscribe(params => {
      const id = params['id'] || '';

      if (id) {
        // Fetch single product
        //if you have problem in display data please go to check your product that it's under array or not 
        this.productService.getProduct(+id).subscribe(product => {
         //this.products=this.products;
          this.products.set([product]); 
        });
      } else {
        // Fetch all products
        this.productService.getProducts().subscribe(products => {
          this.products.set(products);
         
         
        });
      }
    });
  }
}
