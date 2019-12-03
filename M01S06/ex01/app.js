let car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,
  turnLightsOn: function() {
    this.areLightsOn = true;
  },
  turnLightsOff: function() {
    this.areLightsOn = false;
  },
  flashLights: function() {
    this.turnLightsOff();
    this.turnLightsOn();
    setTimeout(() => {
      this.turnLightsOff();
    }, 800)
  },
  openTrunk: function() {
    this.isTrunkOpen = true;
  },
  closeTrunck: function() {
    this.isTrunkOpen = false;
  },
  accelerate: function() {
    this.speed++;
  },
  decelerate:function() {
    this.speed--;
  },
  stop: function() {
    this.speed = 0;
  },
  setSpeed:function(speed) {
    if(speed > this.topSpeed) {
      return;
    }
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }

    this.speed = speed;
  }
};

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`),
console.log(`Viteza noua este ${car.decelerate()} km/h.`)
console.log()