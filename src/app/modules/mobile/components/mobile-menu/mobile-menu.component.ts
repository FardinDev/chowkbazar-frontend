import { ShopService } from './../../../../shared/api/shop.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { MobileMenuService } from '../../../../shared/services/mobile-menu.service';
import { mobileMenu } from '../../../../../data/mobile-menu';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';

@Component({
    selector: 'app-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnDestroy, OnInit {
    private destroy$: Subject<any> = new Subject();

    isOpen = false;
    links$: Observable<MobileMenuItem[]>; 

    constructor(
        public mobilemenu: MobileMenuService,
        public shop: ShopService
        ) { }

    ngOnInit(): void {
        // console.log(this.links);

        this.links$ = this.shop.getMobileMenu();
        this.mobilemenu.isOpen$.pipe(takeUntil(this.destroy$)).subscribe(isOpen => this.isOpen = isOpen);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onItemClick(event: MobileMenuItem): void {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }

        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    }
}
