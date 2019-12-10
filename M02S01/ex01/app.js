class Car {
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;

  constructor(
    make, 
    color, 
    wheels, 
    speed
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels; 
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);
  }
  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }
  
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }
    
    this.speed = speed;
   // return speed;
  }

  setRelativeSpeed(deltaSpeed) {
    let intendedSpeed = this.speed + deltaSpeed;
    this.setSpeed(intendedSpeed);
  }

  openTrunk() {
    this.isTrunkOpen = false; 
  }
  closeTrunk() {
    this.isTrunkOpen = true;
  }
  turnLightsOn() {
    this.areLightsOn = true;
  }
  turnLightsOff() {
    this.areLightsOn = false;
  }
  flashLights() {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    }, 5000)
  }
  

}


var audi = new Car('Audi', 'black', 4, 50);
let opel = new Car('Opel', 'black', 4, 3);
let cars = [audi, opel];

cars.forEach(() => {
console.log(`Masina era marca ${car.make} si se deplasa cu viteza ${car.speed}.`);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();

console.log(`Viteza noua este ${car.speed}`);
});