import { Component, Inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BasketService } from './basket/basket.service';
import { DOCUMENT } from '@angular/common';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(
    private basketService: BasketService,
    @Inject(DOCUMENT) private document: Document,
    private accountService:AccountService 
  ) {}
  ngOnInit(): void {
     this.loadBasket();
    this.loadCurrentUser();
   
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    if (token)
      this.accountService.loadCurrentUser(token).subscribe()
  }

  loadBasket() {
 const basketId = localStorage.getItem('basket_id');
    if (basketId)
      this.basketService.getBasket(basketId);
  }
}
