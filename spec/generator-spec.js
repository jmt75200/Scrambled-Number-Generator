var generate = require('../generator.js');
var n = 1000;


describe("generate", function() {
  it("must contain a function", function() {
    
    expect( generate.random ).toBeDefined();

  });

  it("Arguments is a number, greater than 0.", function() {
    
    var result = generate.random(n);

    expect( result.length ).toEqual(n);
    expect( result.length ).toBeGreaterThan(0);

  });

  it("Two calls of the random function equal two different values of arrays", function() {

    var a = generate.random(n);
    var b = generate.random(n);

    if (a === b){
      return false;
    }

    return true;
    
  });

});