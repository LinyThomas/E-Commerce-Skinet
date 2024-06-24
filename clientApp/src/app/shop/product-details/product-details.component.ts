import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from '../../basket/basket.service';
import { BasketItem } from '../../shared/models/basket';
import { take } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  quantity = 1;
  quantityInBasket = 0;

  constructor(private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private basketService:BasketService,
  private bcService:BreadcrumbService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }
  
  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
       this.shopService.getProduct(+id)
      .subscribe({
        next: response => {
          this.product = response;
          this.bcService.set('@productDetails', this.product.name);          
          this.basketService.basketSource$.pipe(take(1)).subscribe({
            next: (basket => {
              const item = basket?.items.find(x => x.id === +id);
              if (item)
              {
                this.quantity = item.quantity;
                this.quantityInBasket = item.quantity;
                }
            }) 
          })
         
            
        },
        error: error => console.log(error)
      });
    }
   
    
   
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    this.quantity--;
  }

  updateBasket() {
    if (this.product) {
      if (this.quantity > this.quantityInBasket) {
        const quantityToAdd = this.quantity - this.quantityInBasket;
        this.quantityInBasket += quantityToAdd;
        this.basketService.addItemToBasket(this.product,quantityToAdd)
      }
      else {
        const quantityToRemove = this.quantityInBasket - this.quantity;
        this.quantityInBasket -= quantityToRemove;
        this.basketService.removeItemFromBasket(this.product.id, quantityToRemove);
      }
    }
  }

  get buttonText() {
    return this.quantityInBasket===0? 'Add to Basket':'Update Basket'
  }

}