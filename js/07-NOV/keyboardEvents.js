const input = document.getElementById("name");


input.addEventListener('keypress', (event) => {
    console.log("Key press event!");
});

input.addEventListener('keydown', () => {
    console.log("key down event!");
});

input.addEventListener('keyup', () => {
    console.log("Key up event!");
});

const div = document.getElementById("div");

div.addEventListener('click', () => {
    console.log("Div has been clicked!");
});

// will come back to this
// div.addEventListener('keydown', () => {
//     console.log("Div is listening to the key down event!");
// });

const btn = document.getElementById("btn");

function sayHi() {
    console.log("Hi there!");
}

btn.addEventListener('click', sayHi);


setTimeout(() => {
    btn.removeEventListener('click', sayHi);
    console.log("Event is removed!");
}, 10000);