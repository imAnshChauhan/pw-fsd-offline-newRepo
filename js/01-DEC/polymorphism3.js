class Shipping {
    calculate() {
        return 0;
    }
}

class StandardShipping extends Shipping {
    calculate() {
        return 50;
    }
}

class ExpressShipping extends Shipping {
    calculate() {
        return 150;
    }
}

let stdShipping = new StandardShipping();
console.log(stdShipping.calculate());

let expShipping = new ExpressShipping();
console.log(expShipping.calculate());

let ship = new Shipping();
console.log(ship.calculate());