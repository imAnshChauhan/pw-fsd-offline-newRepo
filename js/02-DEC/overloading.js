function greet(name) {
    console.log(`Hello ${name}`);
}

function greet() {
    console.log("Hello!");
}

greet("govind");


function add(num1, num2) {
    return num1 + num2;
}

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

function add(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}

add(1, 2, 3, 4);


// method overloading: having multiple function with same name, 
// but different return type and different set of paramters.