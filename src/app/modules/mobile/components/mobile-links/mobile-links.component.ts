import { RootService } from 'src/app/shared/services/root.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MobileMenuItem } from '../../../../shared/interfaces/mobile-menu-item';

@Component({
    selector: 'app-mobile-links',
    templateUrl: './mobile-links.component.html',
    styleUrls: ['./mobile-links.component.scss']
})
export class MobileLinksComponent {
    @Input() links: MobileMenuItem[] = [];
    @Input() level = 0;

    @Output() itemClick: EventEmitter<MobileMenuItem> = new EventEmitter();

    constructor(
        public root: RootService
    ) { }

    onItemClick(item: MobileMenuItem): void {
        this.itemClick.emit(item);
    }
}
