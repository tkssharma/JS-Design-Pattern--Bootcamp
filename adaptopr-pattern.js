// the old shopping cart constructor
function Cart() {}

Cart.prototype.calculateTotal = function(items) {
    let total;

    return total;
}

// the new shopping cart constructor
function NewCart(coupon) {
    this.coupon = coupon;
}

NewCart.prototype.calculateTotalAndApplyCoupon = function(items) {
    // calculate the total and apply the coupon on it 
}


function CartAdapter(coupon) {
    let cart = new NewCart(coupon);

    function calculateTotal(items) {
       // ...
        cart.calculateTotalAndApplyCoupon(items);
       // ...
    }

    return {
        calculateTotal: calculateTotal
    }
}