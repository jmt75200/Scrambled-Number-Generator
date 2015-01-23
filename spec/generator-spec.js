var generate = require('../generator.js');
var n = 1000;


describe("generate ()", function() {
  it("must contain a function", function() {
    
    expect( generate.thousand ).toBeDefined();

  });

  it("Arguments is a number, greater than 0.", function() {
    
    var result = generate.thousand(n);

    expect( result.length ).toEqual(n);
    expect( result.length ).toBeGreaterThan(0);

  });

  it("Two calls of the thousand function equal two different values of arrays", function() {

    var a = generate.thousand(n);
    var b = generate.thousand(n);

    if (a === b){
      return false;
    }

    return true;
    
  });


  describe("scramble", function() {
    it("Must be a function", function() {

      expect( generate.scramble ).toBeDefined();

    });

    it("Result from thousand function must not equal to the result of scramble function", function() {

      var a = generate.thousand(n);
      var b = generate.scramble(a);

      if (a === b){
        return false;
      }

      return true;
      
    });

    
  });

});