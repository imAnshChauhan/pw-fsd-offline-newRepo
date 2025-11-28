class User {
    constructor(name) {
        this.name = name;
    }

    static talk(user) {
        console.log(`${user.name} can play!`);
    }
}

const u1 = new User("rahul");   // name     // 100 byte

User.talk(u1);




// const u2 = new User("govind");  // name, talk()     // 100 byte
// u2.talk();

// const u3 = new User("ram");     // name, talk()     // 100 byte
// u3.talk();


class Math {
    static PI = 3.14;

    static calculateArea(r) {
        return this.PI * r * r;
    }
}

let m1 = new Math();    // 
let m2 = new Math();    // 

Object.freeze(Math);

Math.calculateArea = (r) => {       // not allowed, not working
    return r;
}

console.log(Math.calculateArea(5));