class PaymentInterface {
    processPayment(amount) {
        throw "Not Implemented!";
    }

    refund(id) {
        throw "Not Implemented"
    }
}

class Razorpay extends PaymentInterface {
    // method overriding
    processPayment(amount) {
        console.log("Razorpay pay:", amount);
    }

    // refund(id) {
    //     console.log("Razorpay refund : ", id);
    // }
}

// const rp = new Razorpay();
// rp.processPayment(100);
// rp.refund(1);

const pi = new Razorpay();
// pi.processPayment(200);