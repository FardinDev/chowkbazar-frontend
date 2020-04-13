import { Component } from '@angular/core';


@Component({
    selector: 'app-header-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    keyword = 'name';
    data = [
       {
         id: 1,
         name: 'Usa'
       },
       {
         id: 2,
         name: 'England'
       }
    ];
    constructor() { }

    selectEvent(item) {
        // do something with selected item
      }
     
      onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
      }
      
      onFocused(e){
        // do something when input is focused
      }
}
