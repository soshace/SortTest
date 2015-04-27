var numberCompare = require('../src/numberCompare');

describe('numberCompare', function () {
   it('should return 1 when first arguments greater than second', function () {
      expect(numberCompare(5, 4)).to.equal(1);
      expect(numberCompare(10, 0)).to.equal(1);
      expect(numberCompare(0, -9.5)).to.equal(1);
      expect(numberCompare(-5, -20)).to.equal(1);
   });

   it('should return -1 when second arguments greater than first', function () {
      expect(numberCompare(4, 5)).to.equal(-1);
      expect(numberCompare(0, 10)).to.equal(-1);
      expect(numberCompare(-9.5, 0)).to.equal(-1);
      expect(numberCompare(-20, -5)).to.equal(-1);
   });

   it('should return 0 when arguments are equal', function () {
      expect(numberCompare(0, 0)).to.equal(0);
      expect(numberCompare(100, 100)).to.equal(0);
      expect(numberCompare(-923.5, -923.5)).to.equal(0);
   });
});
