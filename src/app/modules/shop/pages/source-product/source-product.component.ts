import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';




@Component({
    selector: 'app-source-product',
    templateUrl: './source-product.component.html',
    styleUrls: ['./source-product.component.scss']
})
export class SourceProductComponent implements OnInit, OnDestroy {

    updating = false;

    constructor(

    ) { }

    ngOnInit(): void {
     
    }

    ngOnDestroy(): void {

    }

}
