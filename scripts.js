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
function selector(className) {
    return document.getElementsByClassName(className);
  }


//Each const grabs each status and relevant buttons per book
const status_b1 = document.querySelector('#book1 > p > .status');
const reserve_b1 = document.querySelector('#book1 > .reserve');
const checkout_b1 = document.querySelector('#book1 > .checkout');
const checkin_b1 = document.querySelector('#book1 > .checkin');



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


// Accessing DOM elements for the second book
let status = selector("status");
let reserve = selector("reserve");
let checkout = selector("checkout");
let checkin = selector("checkin");

// Updating properties and styles for the second book
status[1].style.color = STATUS_MAP.reserved.color;
reserve[1].disabled = !STATUS_MAP.reserved.canReserve;
checkout[1].disabled = !STATUS_MAP.reserved.canCheckout;
checkin[1].disabled = !STATUS_MAP.reserved.canCheckIn;

//checkin.1.color = none
//status.1.style.color = STATUS_MAP.status.color
//reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
//checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
//checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

//checkin.2.color = none
//status.2.style.color = STATUS_MAP.status.color
//reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
//checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
//checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'