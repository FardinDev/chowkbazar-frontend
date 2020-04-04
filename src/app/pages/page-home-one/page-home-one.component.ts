import { Component, OnDestroy, OnInit } from '@angular/core';
import { posts } from '../../../data/blog-posts';
import { Brand } from '../../shared/interfaces/brand';
import { Observable, Subject, merge } from 'rxjs';
import { ShopService } from '../../shared/api/shop.service';
import { Product } from '../../shared/interfaces/product';
import { Category } from '../../shared/interfaces/category';
import { BlockHeaderGroup } from '../../shared/interfaces/block-header-group';
import { takeUntil, tap } from 'rxjs/operators';

interface ProductsCarouselGroup extends BlockHeaderGroup {
    products$: Observable<Product[]>;
}
 
interface ProductsCarouselData {
    abort$: Subject<void>;
    loading: boolean;
    products: Product[];
    groups: ProductsCarouselGroup[];
}

@Component({
    selector: 'app-home',
    templateUrl: './page-home-one.component.html',
    styleUrls: ['./page-home-one.component.scss']
})
export class PageHomeOneComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject<void>();
    mostviewed$: Observable<Product[]>;
    mostviewedLarge: [];
    mostviewedSmalls: [];
    brands$: Observable<Brand[]>;
    popularCategories$: Observable<Category[]>;

    columnFeatured$: Observable<Product[]>;
    columnLatest$: Observable<Product[]>;
    columnMostViewed$: Observable<Product[]>;

    slides = [];

    posts = posts;

    featuredProducts: ProductsCarouselData;
    latestProducts: ProductsCarouselData;

    sliderLoading = true;

    constructor(
        private shop: ShopService,
    ) { }

    ngOnInit(): void {

      this.shop.getSliders().subscribe(val => { 
            // console.log(val);
            this.slides = val;

            this.sliderLoading = false;
            
        });

        this.mostviewed$ = this.shop.getMostViewed(7);
        
        // console.log(this.mostviewed$.subscribe(val =>  {console.log(val[0]);}));
        this.brands$ = this.shop.getPopularBrands();

        this.popularCategories$ = this.shop.getCategoriesBySlug();

        this.columnFeatured$ = this.shop.getFeaturedProducts(null, 3);
        this.columnLatest$ = this.shop.getLatestProducts(null, 3);
        this.columnMostViewed$ = this.shop.getMostViewed(3);

        this.featuredProducts = {
            abort$: new Subject<void>(),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'All Featured',
                    current: true,
                    products$: this.shop.getFeaturedProducts(null, 15),
                },
                // {
                //     name: 'Power Tools',
                //     current: false,
                //     products$: this.shop.getFeaturedProducts('power-tools', 8),
                // },
                // {
                //     name: 'Hand Tools',
                //     current: false,
                //     products$: this.shop.getFeaturedProducts('hand-tools', 8),
                // },
                // {
                //     name: 'Apparel,Textiles & Accessories ',
                //     current: false,
                //     products$: this.shop.getFeaturedProducts('plumbing', 8),
                // },
            ],
        };
        this.groupChange(this.featuredProducts, this.featuredProducts.groups[0]);

        this.latestProducts = {
            abort$: new Subject<void>(),
            loading: false,
            products: [],
            groups: [
                {
                    name: 'New',
                    current: true,
                    products$: this.shop.getLatestProducts(null, 8),
                },
                // {
                //     name: 'Power Tools',
                //     current: false,
                //     products$: this.shop.getLatestProducts('power-tools', 8),
                // },
                // {
                //     name: 'Hand Tools',
                //     current: false,
                //     products$: this.shop.getLatestProducts('hand-tools', 8),
                // },
                // {
                //     name: 'Plumbing',
                //     current: false,
                //     products$: this.shop.getLatestProducts('plumbing', 8),
                // },
            ],
        };
        this.groupChange(this.latestProducts, this.latestProducts.groups[0]);
        // console.log(this.latestProducts);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    groupChange(carousel: ProductsCarouselData, group: BlockHeaderGroup): void {
        carousel.loading = true;
        carousel.abort$.next();

        (group as ProductsCarouselGroup).products$.pipe(
            tap(() => carousel.loading = false),
            takeUntil(merge(this.destroy$, carousel.abort$)),
        ).subscribe(x => carousel.products = x);
    }
}
