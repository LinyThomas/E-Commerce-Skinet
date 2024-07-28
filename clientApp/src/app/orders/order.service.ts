import { Injectable, NgModule } from '@angular/core';
import { Order } from '../shared/models/order';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getOrdersForUser() {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }
  getOrderByIdForUser(id: number) {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }
}
