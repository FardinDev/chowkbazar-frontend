import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from '../../interfaces/product';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface ProductImage {
    id: string;
    url: string;
    active: boolean;
}

@Component({
    selector: 'app-query',
    templateUrl: './query.component.html',
    styleUrls: ['./query.component.scss']
})
export class QueryComponent implements AfterViewInit, OnDestroy {
    private destroy$: Subject<void> = new Subject();

    @ViewChild('modal', { read: TemplateRef }) template: TemplateRef<any>;

    images: ProductImage[] = [];
    modalRef: BsModalRef;
    product: Product;
    modalConfig = {
        backdrop: true,
        ignoreBackdropClick: true
      };

    constructor(
        private query: QueryService,
        private modalService: BsModalService
    ) { }

    ngAfterViewInit(): void {
        
        this.query.show$.pipe(takeUntil(this.destroy$)).subscribe(product => {

            if (this.modalRef) {
                this.modalRef.hide();
            }
            // this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog-centered modal-xl' });
            this.product = product;
            this.images =  this.product.images.map((url, index) => {
                return {
                    id: index.toString(),
                    url,
                    active: index === 0
                };
            });
            this.modalRef = this.modalService.show(this.template, this.modalConfig);
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
