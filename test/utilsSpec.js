var expect = require("chai").expect;
var utils = require("../lib/utils.js");

describe("Utils", function(){
  describe("#parseToArray(args)", function(){
    it("should parse inputs correctly in to an array of numbers", function(){
      var args = "1,3,6,2,4";
      var expected = new Array(1,3,6,2,4);
      var result = utils.parseToArray(args);

      expect(result).to.be.an("array");
      expect(result).to.eql(expected);
    });
  });

  describe("#indexOfCenter(array)", function(){
    it("should return index of center for odd numbered array", function(){
      var array = new Array(1,3,6,2,4);
      var expected = 2;
      var result = utils.indexOfCenter(array);

      expect(array[result]).to.be.an("number");
      expect(result).to.equal(expected);
    });

    it("should return index of center for even numbered array", function(){
      var array = new Array(1,3,6,2);
      var expected = 1;
      var result = utils.indexOfCenter(array);

      expect(array[result]).to.be.an("number");
      expect(result).to.equal(expected);
    });
  });
  
  describe("#sumOf(array, begin, end)", function(){
    it("should return sum of array from begin to end index", function(){
      var array = new Array(1,3,6,2,4);
      var expected = 11;
      var result = utils.sumOf(array, 1, 3);
      
      expect(result).to.be.a("number");
      expect(result).to.equal(expected);
    });
  });
  
  describe("#findPivot(array, initialPivot, sumLeft, sumRight)", function(){
    it("should return index of the pivot for a given array, if found", function(){
      var array = new Array(1,2,3,4,6);
      var expected = 3;
      var result = utils.findPivot(array, 2, 3, 10);
      
      expect(result).to.be.a("number");
      expect(result).to.be.above(0);
      expect(result).to.be.below(array.length);
      expect(result).to.equal(expected);
    });
    
    it("should return -1 for a given array, if no pivot found", function(){
      var array = new Array(1,2,3,4,5,6,7);
      var expected = -1;
      var result = utils.findPivot(array, 2, 3, 9);
      
      expect(result).to.be.a("number");
      expect(result).to.equal(expected);
    });
  });
  
  describe("#highlightIndex(array, index)", function(){
    it("should highlight the given index in array", function(){
      var array = new Array(1,4,6,3,2);
      var index = 2;
      var expected = new Array(1,4,"[6]",3,2);
      var result = utils.highlightIndex(array, index);
      
      expect(result).to.be.an("array");
      expect(result).to.eql(expected);
    });
  });
});
