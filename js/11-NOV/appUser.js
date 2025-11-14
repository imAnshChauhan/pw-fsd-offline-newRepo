// const userService = require('./userService');

// userService.addUser("govind");
// userService.addUser("krishna");
// userService.addUser("rahul");

// const allUser = userService.listUser();

// console.log(allUser);

// allUser.push("sanjay!");

// console.log(allUser);

// const newUsers = userService.listUser();

// console.log(newUsers);


// [string, number, boolean, floating] -> pass by value

function changeAge(age) {
    age = 40;
}

let age = 25;

changeAge(age);

console.log(age);

// objects, arrays, sets, map: this gets passed as "pass by reference"
// function changeDetails(obj) {
//     obj.name = "govind";
// }

// let student = {
//     name: "sanjay"
// }

// changeDetails(student);

// console.log(student);



// [string, number, boolean, floating] -> pass by value
// [objects, arrays, sets, map]: this gets passed as "pass by reference"