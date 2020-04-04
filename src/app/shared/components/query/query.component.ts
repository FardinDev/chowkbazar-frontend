import { AfterViewInit, Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ShopService } from '../../api/shop.service';
import { Product } from '../../interfaces/product';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
interface ProductImage {
    id: string;
    url: string;
    active: boolean;
}

export class Query {
    public name: string;
    public phoneOrEmail: string;
    public query: string;
   
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
    storingQuery = false;
    modalConfig = {
        backdrop: true,
        ignoreBackdropClick: true
      };

    showingQuery = false;
    model = new Query();

    constructor(
        private query: QueryService,
        private modalService: BsModalService,
        private shop: ShopService,
        private toastr: ToastrService
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

    onSubmit(form) {
        this.storingQuery = true;
        let data = form.value;
         this.shop.storeQuery(this.product.id, data.name, data.phoneOrEmail, data.query)
             .subscribe(val => {
                 if (val.status == 'success') {
                    this.storingQuery = false;
                    this.toastr.success(`Your Query Submitted Successfully!`);
                    form.reset();
                    this.modalRef.hide();
                 }
                 
             });
         

      }
}
