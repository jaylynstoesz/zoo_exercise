function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
  this.sleep = true;
}

Animal.prototype.oink = function(){
  if (this.kind === "Pig") {
    return "oink";
  } else {
    return "not a pig";
  }
};

Animal.prototype.growUp = function() {
  this.age += 1;
  return this.age;
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
  return this.awake;
};

Animal.prototype.feed = function() {
  if (this.awake === true) {
    this.feed = true;
  } else {
    this.feed = false;
  }
  return this.feed;
};

module.exports=Animal;
