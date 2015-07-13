var Animal = require('../src/animal.js');
var animal;

describe('Animal', function(){

  beforeEach(function(){
    // create a new animal object each time
    animal = new Animal("Fido", 27, "Pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual("oink");
    });
    it('should not oink if it is not pig', function(){
      animal.kind = "Lion";
      expect(animal.oink()).toEqual("not a pig");
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      expect(animal.growUp()).toEqual(animal.age);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toEqual(false);
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      expect(animal.wakeUp()).toEqual(true);
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      expect(animal.sleep).toEqual(true);
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.wakeUp();
      expect(animal.feed()).toEqual(true);
    });
    it('should not get fed if sleeping', function(){
      expect(animal.feed()).toEqual(false);
    });
  });
});
