import { Component } from '@angular/core';
import { theme } from '../../../data/theme';
import { StoreService } from '../../shared/services/store.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    theme = theme; 
    activeUser = Math.floor(Math.random() * (150 - 47) + 47);

    constructor(public store: StoreService) { }
}
