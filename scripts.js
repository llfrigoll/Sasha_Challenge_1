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

//Each const grabs each status and relevant buttons per book
const status_b1 = document.querySelector('#book1 > p > .status');
const reserve_b1 = document.querySelector('#book1 > .reserve');
const checkout_b1 = document.querySelector('#book1 > .checkout');
const checkin_b1 = document.querySelector('#book1 > .checkin');

const status_b2 = document.querySelector('#book2 > p > .status');
const reserve_b2 = document.querySelector('#book2 > .reserve');
const checkout_b2 = document.querySelector('#book2 > .checkout');
const checkin_b2 = document.querySelector('#book2 > .checkin');

const status_b3 = document.querySelector('#book3 > p > .status');
const reserve_b3 = document.querySelector('#book3 > .reserve');
const checkout_b3 = document.querySelector('#book3 > .checkout');
const checkin_b3 = document.querySelector('#book3 > .checkin');

//Book 1
//Sets checkin button text to black
//Sets the status text color based on status value
//Enables/disables each button based on status value
checkin_b1.style.color = 'black';
status_b1.style.color = STATUS_MAP[status_b1.textContent].color;
reserve_b1.disabled = STATUS_MAP[status_b1.textContent].canReserve ? 'enabled' : 'disabled';
checkout_b1.disabled = STATUS_MAP[status_b1.textContent].canCheckout ? 'enabled' : 'disabled';
checkin_b1.disabled = STATUS_MAP[status_b1.textContent].canCheckIn ? 'enabled' : 'disabled';

//checkin.1.color = none
//status.1.style.color = STATUS_MAP.status.color
//reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
//checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
//checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

//Book3
// Update properties of Book 3 based on its status
checkin_b3.style.color = 'grey';
status_b3.style.color = STATUS_MAP[status_b3.textContent].color;
reserve_b3.enabled= STATUS_MAP[status_b3.textContent].canReserve ? 'enabled' : 'disabled';
checkout_b3.enabled = STATUS_MAP[status_b3.textContent].canCheckout ? 'enabled' : 'disabled';
checkin_b3.disabled = STATUS_MAP[status_b3.textContent].canCheckIn ? 'enabled' : 'disabled';