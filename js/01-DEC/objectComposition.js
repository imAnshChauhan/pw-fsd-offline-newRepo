class Engine {
    start() {
        console.log("Engine started!");
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
    }

    startCar() {
        this.engine.start();
    }
}

const c1 = new Car();
c1.startCar();