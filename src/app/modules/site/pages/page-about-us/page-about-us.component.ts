import { Component, OnInit } from '@angular/core';
import { DirectionService } from '../../../../shared/services/direction.service';
import { ShopService } from 'src/app/shared/api/shop.service';

@Component({
    selector: 'app-about-us',
    templateUrl: './page-about-us.component.html',
    styleUrls: ['./page-about-us.component.scss']
})
export class PageAboutUsComponent implements OnInit{
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

    about = '';
    loading = true;

    constructor(
        private direction: DirectionService,
        public shop: ShopService
    ) { }

    ngOnInit(): void {
       
        this.shop.getAbouts().subscribe(val => { 

            this.about = val.about;
            this.loading = false;
        });
    }
}
