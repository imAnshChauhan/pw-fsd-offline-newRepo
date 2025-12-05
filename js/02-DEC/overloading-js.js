function add(...args) {
    console.log(args);

    let sum = 0;

    for(let i=0; i<args.length; i++)
        sum += args[i];

    return sum;
}

console.log(add(1, 2));