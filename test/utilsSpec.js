var expect = require("chai").expect;
var utils = require("../lib/utils.js");

describe("Utils", function(){
  describe("#parseToArray()", function(){
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
});
