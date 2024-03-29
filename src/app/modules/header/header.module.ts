import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from '../../shared/shared.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ClickOutsideModule } from 'ng-click-outside';
// components
import { DepartmentsComponent } from './components/departments/departments.component';
import { HeaderComponent } from './header.component';
import { LinksComponent } from './components/links/links.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { SearchListComponent } from './components/search/search-list/search-list.component';

@NgModule({
    declarations: [
        // components
        DepartmentsComponent,
        HeaderComponent,
        LinksComponent,
        MegamenuComponent,
        MenuComponent,
        NavComponent,
        SearchComponent,
        TopbarComponent,
        AccountMenuComponent,
        SearchListComponent
      
    ],
    imports: [
        // modules (angular)
        CommonModule,
        RouterModule,
        // modules
        SharedModule,
        AutocompleteLibModule,
        ClickOutsideModule
        // components

    ],
    exports: [
        // components
        HeaderComponent
    ]
})
export class HeaderModule { }
