import { Component } from '@angular/core';
import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent {

    address: string;
    phone: string;
    email: string;
    embeded_map: string;
    loading = true;
    constructor(
        public shop: ShopService
    ) { }


    ngOnInit(): void {
       
        this.shop.getAbouts().subscribe(val => { 

            this.address = val.address;
            this.phone = val.phone;
            this.email = val.email;
            this.embeded_map = val.embeded_map;
            this.loading = false;

        });
    }
}
