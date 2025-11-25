// const car = {
//     brand: "Toyota",
//     drive() {
//         console.log(`Driving, ${this.brand}`);
//     }
// }

// car.drive();

// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     drive() {   // member function / behaviour of you class
//         console.log(`Driving ${this.brand}`);
//     }

//     getConfig() {
//         console.log(this.make + " : " + this.model + " : " + this.year);
//     }
// }

// const toyota = new Car("Toyota", "Camry", 2025);

// toyota.getConfig();

// toyota.make = "BMW";

// toyota.getConfig();


class Account {
    #pin = null;        // declare this properties using a prefix # here
    #balance = 0;
    #noOfWithdrawal = 0;

    constructor(holderName) {
        // by default public
        this.holderName = holderName;

        // private initialisation
        this.#balance = 100;
        this.#pin = `${holderName}@1234`;
        this.#noOfWithdrawal = 0;
    }

    getBalance(pin) {
        if(!pin || (pin !== this.#pin))
            return {
                status: false,
                message: "Invalid details!"
            }

        return this.#balance;
    }

    deposit(amount, pin) {
        if(!pin || (pin !== this.#pin))
            return {
                status: false,
                message: "Invalid details!"
            }

        this.#balance += amount;
        return true;
    }

    withdraw(amount, pin, aggreeForAdditionalPay = false) {
        if(!pin || pin !== this.#pin)
            return {
                status: false,
                message: "Invalid details!"
            }
        
        if(this.#noOfWithdrawal >= 3)
            return {
                status: false,
                message: "invalid operation"
            }

        if(amount < 100 || amount > 50000)
            return {
                status: false,
                message: "invalid amount for withdrawal"
            }

        if(amount > this.#balance) {
            return {
                status: false,
                message: "Insufficient balance!",
                meta: {
                    currentBalance: this.#balance
                }
            }
        }

        this.#balance -= amount;

        this.#noOfWithdrawal++;

        return {
            status: true,
            meta: {
                currentBalance: this.#balance
            }
        };
    }
}

const a1 = new Account("govind");

console.log(a1.getBalance("govind@1234"));

let depositResponse = a1.deposit(100000, "govind@1234");
console.log(depositResponse);

console.log(a1.getBalance("govind@1234"));

console.log(a1.withdraw(80000, "govind@1234"));
console.log(a1.withdraw(2000, "govind@1234"));
console.log(a1.withdraw(2000, "govind@1234"));
console.log(a1.withdraw(2000, "govind@1234"));

console.log(a1.getBalance("govind@1234"));