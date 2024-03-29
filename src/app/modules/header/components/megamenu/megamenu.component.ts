import { RootService } from './../../../../shared/services/root.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Megamenu } from '../../../../shared/interfaces/megamenu';
import { NestedLink } from '../../../../shared/interfaces/nested-link';

@Component({
    selector: 'app-header-megamenu',
    templateUrl: './megamenu.component.html',
    styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent {
    @Input() menu: Megamenu;
    @Input() departments = false;

    @Output() itemClick: EventEmitter<NestedLink> = new EventEmitter<NestedLink>();

    constructor(
        public RootService: RootService,
    ) { }
}
