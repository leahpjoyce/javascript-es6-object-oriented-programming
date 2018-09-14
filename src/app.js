class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

}

let drone = new Drone(1234, 'Leah');

//Used bracket notation
console.log('drone: ' + drone['id'] + ' ' + drone['name']);
