class Payment {
    pay() {     // public
        console.log("Generic payment method!");
    }
}

class Paytm extends Payment {
    pay() {
        console.log("Paytm payment method!");
    }

    fingerPritAuth() {

    }
}

class GooglePay extends Payment {
    pay() {
        console.log("Googlepay payment method!");
    }

    pinAuth() {
        
    }
}

class BhimCopy extends Payment {
}

const ptm1 = new Paytm();
ptm1.pay();

const ggl1 = new GooglePay();
ggl1.pay();

const bhim1 = new BhimCopy();
bhim1.pay();