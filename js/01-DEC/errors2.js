function divide(a, b) {     // -10^9 - 10^9
    if(b === 0)
        throw new SyntaxError("number cannot be divided by 0");

    return a / b;
}

try {
    console.log(divide(2, 0));
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Some clean up code here!");
}