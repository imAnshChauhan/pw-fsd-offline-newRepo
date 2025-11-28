class Vehicle {
    plateNumber;
    #chassisNumber;

    constructor(plateNumber, chassisNumber) {
        this.plateNumber = plateNumber;
        this.#chassisNumber = chassisNumber;
    }

    drive() {
        console.log("All vehicles can drive!");
    }

    getChassisNumber() {
        return this.#chassisNumber;
    }
}

class fourWheeler extends Vehicle {
    noOfAirbags;
    noOfPeople;

    constructor(airbags, plateNumber, chassisNumber) {
        super(plateNumber, chassisNumber);  // this is calling the constructor of the Vehicle class
        this.noOfAirbags = airbags;
        this.noOfPeople = 4;
    }

    wearBelt() {
        console.log("Safe now!");
    }
}



const creta = new fourWheeler(4, 1234, "HSGFGHS783DE");
console.log("own properties : " + creta.noOfAirbags + " : " + creta.noOfPeople);

console.log("parent properties : " + creta.plateNumber);

creta.wearBelt();
creta.drive();
console.log(creta.getChassisNumber());


// creta.#chassisNumber;





// class twoWheller extends Vehicle {

// }


// class ElectricCar extends fourWheeler {
//     chargingCapacity;

//     constructor(chargingCapacity) {
//         this.chargingCapacity = chargingCapacity;
//     }
// }

