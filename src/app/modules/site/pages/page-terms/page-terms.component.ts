import { Component } from '@angular/core';
import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-terms',
    templateUrl: './page-terms.component.html',
    styleUrls: ['./page-terms.component.scss']
})
export class PageTermsComponent {
    privacy_policy: any;
    loading = true;
    constructor(
        public shop: ShopService
    ) { }

    ngOnInit(): void {
       
        this.shop.getAbouts().subscribe(val => { 

            this.privacy_policy = val.privacy_policy;
            this.loading = false;
    
        });
    }
}
