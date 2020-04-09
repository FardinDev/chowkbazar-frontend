import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    address = 'Office: House - 91, Road - 9/A (New), Dhanmondi, Dhaka - 1209';
    email = 'chowkbazarbd@gmail.com';
    phone = ['(+88) 01727-288419'];
    facebook = 'https://www.facebook.com/chowkbazarbd';
    facebook_group = 'https://www.facebook.com/groups/cbbdcommunity';
    // hours = 'Mon-Sat 10:00pm - 7:00pm';

    get primaryPhone(): string|null {
        return this.phone.length > 0 ? this.phone[0] : null;
    }

    constructor() { }
}
