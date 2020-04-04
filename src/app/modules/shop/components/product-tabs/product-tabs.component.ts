import { products } from './../../../../../fake-server/database/products';
import { Component, Input, OnInit } from '@angular/core';
import { ProductFeaturesSection} from '../../../../shared/interfaces/product';
import { specification } from '../../../../../data/shop-product-spec';
import { reviews } from '../../../../../data/shop-product-reviews';
import { Review } from '../../../../shared/interfaces/review';
import { ShopService } from '../../../../shared/api/shop.service';

@Component({
    selector: 'app-product-tabs',
    templateUrl: './product-tabs.component.html',
    styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent {
    @Input() withSidebar = false;
    @Input() tab: 'description'|'specification'|'reviews' = 'description';
    @Input() description = '';

    specification: ProductFeaturesSection[] = specification;
    reviews: Review[] = reviews;



    constructor(
        private shop : ShopService,
    ) { }

    OnInit(){

      
        

    }
}
