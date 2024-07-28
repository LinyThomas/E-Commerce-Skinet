import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.getOrdersForUser();
  }

  getOrdersForUser() {
    this.orderService.getOrdersForUser().subscribe({
      next: orders => {
        this.orders=orders
      }
    })
  }
}
