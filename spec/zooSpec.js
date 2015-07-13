var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animal,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      expect(zoo.changeLocation("Denver")).toEqual("Denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      expect(zoo.open()).toEqual(true);
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual(true);
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual(false);
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      animal = lion;
      expect(zoo.addAnimal(animal)).toEqual("No can do.");
    });

    it('should add an animal to the animals array', function(){
      zoo.open();
      animal = lion;
      expect(zoo.addAnimal(animal)).toEqual([animal]);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      animal = zoo;
      expect(zoo.addAnimal(animal)).toEqual("No can do.");
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(lion);
      expect(zoo.addAnimal(lion)).toEqual("No can do.");
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(lion);
      zoo.addAnimal(pig);
      expect(zoo.removeAnimal(lion)).toEqual(null);
    });
  });
});
