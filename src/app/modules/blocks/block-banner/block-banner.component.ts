import { Component, Input } from '@angular/core';
import { RootService } from 'src/app/shared/services/root.service';

@Component({
    selector: 'app-block-banner',
    templateUrl: './block-banner.component.html',
    styleUrls: ['./block-banner.component.scss']
})

export class BlockBannerComponent {
    constructor(public root: RootService) {
        
    }

    @Input() desktop = '';
    @Input() mobile = '';

}
