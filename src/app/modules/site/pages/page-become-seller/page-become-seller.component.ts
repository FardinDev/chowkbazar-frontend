import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../../../shared/services/direction.service';
import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './page-become-seller.component.html',
    styleUrls: ['./page-become-seller.component.scss']
})
export class PageBecomeSellerComponent implements OnInit{
    carouselOptions = {
        nav: false,
        dots: true,
        responsive: {
            580: {items: 3, margin: 32},
            280: {items: 2, margin: 24},
            0: {items: 1}
        },
        rtl: this.direction.isRTL()
    };

    become_seller = '';

    constructor(
        private direction: DirectionService,
        public shop: ShopService
    ) { }

    ngOnInit(): void {
       
        this.shop.getAbouts().subscribe(val => { 

            this.become_seller = val.become_seller;
        });
    }
}
