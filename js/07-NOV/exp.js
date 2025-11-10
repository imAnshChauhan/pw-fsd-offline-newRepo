let arr = ['a', 'b', 'c'];
let str = "abc";

// iterate on all elements of your array/string/map/obj
// for(let i of str) {
//     console.log(i);     // a, b, c
// }

// for(let i in str) {
//     console.log(i);     // 0, 1, 2
// }

let obj = {
    name: "sanjay",
    age: 25
}

for(let key in obj) {
    console.log(key, " : " + obj[key]);
}

// of loop is not allowable to acces in obj
for(let key of Object.keys(obj)) {
    console.log(key + " : " + obj[key]);
}
