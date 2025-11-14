console.log(exports);

let log = function(message) {
    console.log(`[LOG]: ${message}`);
}

// this is reference changing   ----- WILL NOT WORK
exports = {};

// you just populate the property in the same reference ---- WORK FINE
exports.log = log;

console.log(exports);