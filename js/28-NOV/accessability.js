// class User {
//     name;   // public

//     constructor(name) {
//         this.name = name;
//     }

//     greet() {       // public
//         console.log(`Hello, ${this.name}`);
//     }
// }

// console.log("By default public implementation.")
// const u1 = new User("govind");
// u1.greet();
// console.log(u1.name);

// console.log("===============================================");

// class BankAccount {
//     #balance;   // private declaration
//     #pin;       // private

//     constructor(pin, balance) {
//         this.#pin = pin;
//         this.#balance = balance;
//     }

//     #getBalance() {  // private
//         console.log("Inside the private method #getBalance");
//         return this.#balance;
//     }

//     sendBalance(pin) {
//         if(pin === this.#pin)
//             return this.#getBalance();
        
//         return {
//             status: 401,
//             message: "pin is not valid!"
//         }
//     }
// }

// console.log("Private data members : #")
// const acc = new BankAccount(1234, 1000);        // pin = 1234, balance = 1000

// let bal = acc.sendBalance(1234);
// console.log(bal);



class Employee {
    constructor(salary) {
        this._salary = salary;  // protect-style declaration
    }
}

class Manager extends Employee {
    showSalary(pin) {
        if(pin === 1234) {
            return this._salary;
        }
    }
}

const rahul = new Manager(80000);

console.log(rahul.showSalary(1234));

// bellow code is not recommended.
console.log(rahul._salary);     // js does not support protected as a concept.
