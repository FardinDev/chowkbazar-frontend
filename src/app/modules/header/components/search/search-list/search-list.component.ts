import { QuickviewService } from './../../../../../shared/services/quickview.service';
import { ShopService } from './../../../../../shared/api/shop.service';
import { RootService } from './../../../../../shared/services/root.service';
import { SearchProduct } from './../../../../../shared/interfaces/product';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'search-list-component',
    templateUrl: './search-list.component.html',
    styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
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
