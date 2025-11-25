let text = "Alice and Bob went to Delhi2";

// let result = text.match("Javascript");   // []

// i -> its a flag, ignoring the cases

// let result = text.match(/Javascript/i);

// g -> global search, all occurrences of the given word.

// let result = text.match(/javascript/g);


// let result = text.match(/\d+/g);

// console.log(result);

let result = text.match(/\b[A-Z][a-z]+/g);

console.log(result);


// \b -> word boundry
// [A-Z] -> it has to be between A-Z.
// [a-z]+ -> all occurences of small chars after it.
// g -> all occurences of the match/pattern