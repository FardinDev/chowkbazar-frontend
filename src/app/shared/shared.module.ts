import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// modules (third-party)
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// directives
import { ClickDirective } from './directives/click.directive';
import { CollapseContentDirective, CollapseDirective, CollapseItemDirective } from './directives/collapse.directive';
import { DepartmentsAreaDirective } from './directives/departments-area.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { FakeSlidesDirective } from './directives/fake-slides.directive';
import { OwlPreventClickDirective } from './directives/owl-prevent-click.directive';

// components
import { AlertComponent } from './components/alert/alert.component';
import { IconComponent } from './components/icon/icon.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './components/product/product.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { QueryComponent } from './components/query/query.component';
import { RatingComponent } from './components/rating/rating.component';

// pipes
import { ColorTypePipe } from './pipes/color-type.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';


@NgModule({
    declarations: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        // components
        AlertComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PageHeaderComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        QuickviewComponent,
        QueryComponent,
        RatingComponent,
        // pipes
        CurrencyFormatPipe,
        ColorTypePipe
    ],
    imports: [
        // modules (angular)
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        // modules (third-party)
        CarouselModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
    ],
    exports: [
        // directives
        ClickDirective,
        CollapseContentDirective,
        CollapseDirective,
        CollapseItemDirective,
        DepartmentsAreaDirective,
        DropdownDirective,
        FakeSlidesDirective,
        OwlPreventClickDirective,
        // components
        AlertComponent,
        IconComponent,
        InputNumberComponent,
        LoadingBarComponent,
        PageHeaderComponent,
        PaginationComponent,
        PostCardComponent,
        ProductCardComponent,
        ProductComponent,
        QuickviewComponent,
        QueryComponent,
        RatingComponent,
        // pipes
        ColorTypePipe,
        CurrencyFormatPipe
    ]
})
export class SharedModule { }
