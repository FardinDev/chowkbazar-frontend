import { ShopService } from './../../../../shared/api/shop.service';
import { Component } from '@angular/core';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';

@Component({
    selector: 'app-mobile-header',
    templateUrl: './mobile-header.component.html',
    styleUrls: ['./mobile-header.component.scss']
})
export class MobileHeaderComponent {
    infoText = 'Type To Search Products';
    keyword = 'name';
    query = '';
    focus = false;
    showingQuickview = false;
    loading = false;
    products = [];
    constructor(
        public menu: MobileMenuService,
        public wishlist: WishlistService,
        public cart: CartService,
        public shop: ShopService
    ) { }


    searchQuery(searchValue: string): void {  
        this.query = searchValue;
        if(searchValue.length >= 3){
          this.loading = true;
            this.shop.searchProducts(searchValue).subscribe(val => {
              this.products = val;
              this.loading = false;
              if (!this.products.length) {
                this.infoText = 'No Products Found With: '+searchValue;
              }
          });
        }else{
          this.products = [];
          this.infoText = 'Type '+(3-searchValue.length)+' More Characters To Search' ;
        }
      }
}
