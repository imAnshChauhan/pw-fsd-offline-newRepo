class Car {
    #engineOn = false;
    
    start() {
        this.#checkAndStartEngine();
        console.log("Car Started!");
    }

    // abstract, intentionally private functionality.
    #checkAndStartEngine() {
        this.#engineOn = true;
        console.log("Engine OK");
    }
}

let c1 = new Car();
c1.start();