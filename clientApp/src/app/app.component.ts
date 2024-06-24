import { Component, Inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { BasketService } from './basket/basket.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(
    private basketService: BasketService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit(): void {
     const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const basketId = localStorage.getItem('basket_id');
      if(basketId) this.basketService.getBasket(basketId)
    }
  }
}
