class Camera {
    takePhoto() {
        console.log("Photo taken!");
    }
}

class GPS {
    locate() {
        console.log("Location found!");
    }
}

class Battery {
    charge() {
        console.log("Charging...");
    }
}

class Smartphone {
    constructor(brand, name) {
        this.brand = brand;
        this.name = name;
        this.camera = new Camera();
        this.battery = new Battery();
        this.gps = new GPS();
    }
}

const sp1 = new Smartphone();
// sp1.camera.takePhoto();
// sp1.gps.locate();
// sp1.battery.charge();

sp1.camera = new GPS();

const sp2 = new Smartphone();

sp2.camera.takePhoto();