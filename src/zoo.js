// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = false;
  this.animals = [];
}

Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
  return this.location;
};

Zoo.prototype.open = function() {
  this.status = true;
  return this.status;
};

Zoo.prototype.isOpen = function() {
  if (this.status === false) {
    return false;
  } else {
    return true;
  }
};

Zoo.prototype.addAnimal = function(animal) {
  var duplicates = 0;
  for (var i = 0; i < this.animals.length; i++) {
    if (this.animals[i].name === animal.name) {
      duplicates += 1;
    }
  }
  if (duplicates === 0) {
    if (this.status === true && animal instanceof Animal) {
      this.animals.push(animal);
      return this.animals;
    } else {
      return "No can do.";
    }
  } else {
    return "No can do.";
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  if (this.status === true) {
    for (var i = 0; i < this.animals.length; i++) {
      if (this.animals[i].name === animal.name) {
        this.animals[i] = null;
        return this.animals[i];
      }
    }
  }
};

module.exports=Zoo;
