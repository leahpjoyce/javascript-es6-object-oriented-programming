class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

}

let drone = new Drone(1234, 'Leah');

//Used dot notation
console.log('drone: ' + drone.id + ' ' + drone.name);

//console.log(typeof Drone);
//console.log(typeof drone);
//console.log(drone instanceof Drone);
