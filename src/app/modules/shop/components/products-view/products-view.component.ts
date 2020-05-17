import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShopSidebarService } from '../../services/shop-sidebar.service';
import { PageCategoryService } from '../../services/page-category.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RootService } from 'src/app/shared/services/root.service';

export type Layout = 'grid'|'grid-with-features'|'list';

@Component({
    selector: 'app-products-view',
    templateUrl: './products-view.component.html',
    styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit, OnDestroy {
    @Input() layout: Layout = 'grid';
    @Input() grid: 'grid-3-sidebar'|'grid-4-full'|'grid-5-full' = 'grid-3-sidebar';
    @Input() offcanvas: 'always'|'mobile' = 'mobile';

    destroy$: Subject<void> = new Subject<void>();

    listOptionsForm: FormGroup;
    filtersCount = 0;

    constructor(
        private fb: FormBuilder,
        public sidebar: ShopSidebarService,
        public pageService: PageCategoryService,
        public activeRoute: ActivatedRoute,
        public root: RootService
    ) { }

    ngOnInit(): void {

        
        this.listOptionsForm = this.fb.group({
            page: this.fb.control(this.pageService.page),
            limit: this.fb.control(this.pageService.limit),
            sort: this.fb.control(this.pageService.sort),
            tag: this.fb.control(this.pageService.tag),
            search: this.fb.control(this.pageService.search),
            view: this.fb.control(this.pageService.view),
        });
        this.listOptionsForm.valueChanges.subscribe(value => {
            value.limit = parseFloat(value.limit);

            this.pageService.updateOptions(value);
        });

        this.activeRoute.queryParams.subscribe(queryParams => {
            if (queryParams.tag) {
               this.pageService.updateOptions(queryParams);
           }
           if (queryParams.search) {
               this.pageService.updateOptions(queryParams);
               // alert(queryParams.search);
           }
           if (queryParams.view) {
               this.pageService.updateOptions(queryParams);
               // alert(queryParams.view);
            }
           });

        this.pageService.list$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(
            ({page, limit, sort, tag, search, view, filterValues}) => {
                this.filtersCount = Object.keys(filterValues).length;
                this.listOptionsForm.setValue({page, limit, sort, tag, search, view}, {emitEvent: false});
            }
        );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    setLayout(value: Layout): void {
        this.layout = value;
    }

    resetFilters(): void {
        this.pageService.updateOptions({filterValues: {}});
    }


}
