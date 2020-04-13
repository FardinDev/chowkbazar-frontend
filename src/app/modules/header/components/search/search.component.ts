import { QuickviewService } from './../../../../shared/services/quickview.service';
import { RootService } from './../../../../shared/services/root.service';
import { ShopService } from './../../../../shared/api/shop.service';
import { Component } from '@angular/core';


@Component({
    selector: 'app-header-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    keyword = 'name';
    infoText = 'Type To Search Products';
    query = '';
    focus = false;
    showingQuickview = false;
    loading = false;
    products = [];
    data = [
       {
         id: 1,
         name: 'Usa'
       },
       {
         id: 2,
         name: 'England'
       }
    ];
    constructor(
      private shop: ShopService,
      public quickview: QuickviewService,
      public root: RootService
    ) { }

    selectEvent(item) {
        // do something with selected item
      }
     
      onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
      }
      
      onFocused(e){
        // do something when input is focused
      }

      focusFunction(){
        this.focus = true;
        
      }

      clear(){
        setTimeout(() => {
          this.focus = false;
          this.products = [];
        }, 200);
      }



      showQuickview(slug): void {
        if (this.showingQuickview) {
            return;
        }

 

        this.showingQuickview = true;
        this.shop.getProduct(slug).subscribe(val => {

          this.quickview.show(val).subscribe({
            complete: () => {
                this.showingQuickview = false;
            }
        });

        });

        
    }

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
