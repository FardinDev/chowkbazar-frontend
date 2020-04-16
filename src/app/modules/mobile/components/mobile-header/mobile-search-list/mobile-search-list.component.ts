import { QuickviewService } from './../../../../../shared/services/quickview.service';
import { ShopService } from './../../../../../shared/api/shop.service';
import { RootService } from './../../../../../shared/services/root.service';
import { SearchProduct } from './../../../../../shared/interfaces/product';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mobile-search-list-component',
  templateUrl: './mobile-search-list.component.html',
  styleUrls: ['./mobile-search-list.component.scss']
})
export class MobileSearchListComponent {

  @Input() product : SearchProduct;
  showingQuickview = false;
  isImgLoaded = false;

  constructor(
      public root: RootService,
      private shop: ShopService,
      public quickview: QuickviewService,

  ) { }



  showQuickview(slug): void {
      if (this.showingQuickview) {
          return;
      }
      this.showingQuickview = true;
      this.shop.getProduct(slug).subscribe(val => {

        this.quickview.show(val).subscribe({
          complete: () => {
              this.showingQuickview  = false;
          }
      });

      });

      
  }
}
