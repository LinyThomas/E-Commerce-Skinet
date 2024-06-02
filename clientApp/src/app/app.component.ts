import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Pagination } from '../models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];
  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.http
      .get<Pagination<Product[]>>('https://localhost:5001/api/products')
      .subscribe({
        next: (response: Pagination<Product[]>) => (this.products = response.data),
        error: (error) => console.log(error),
        complete: () => {
          console.log('Request Completed');
          console.log('extra statement');
        },
      });
  }
}
