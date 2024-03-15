// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const status_b1 = document.querySelector('#book1 > .status');
const reserve_b1 = document.querySelector('#book1 > .reserve');
const checkout_b1 = document.querySelector('#book1 > .checkout');
const checkin_b1 = document.querySelector('#book1 > .checkin');

const status_b2 = document.querySelector('#book2 > .status');
const reserve_b2 = document.querySelector('#book2 > .reserve');
const checkout_b2 = document.querySelector('#book2 > .checkout');
const checkin_b2 = document.querySelector('#book2 > .checkin');

const status_b3 = document.querySelector('#book3 > .status');
const reserve_b3 = document.querySelector('#book3 > .reserve');
const checkout_b3 = document.querySelector('#book3 > .checkout');
const checkin_b3 = document.querySelector('#book3 > .checkin');

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'