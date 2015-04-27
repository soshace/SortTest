var compareByField = require('../src/compareByField');

describe('compareByField', function () {
   it('should return compare function', function () {
      var compare = compareByField('field');

      expect(compare).to.be.function;
      expect(compare.length).to.equal(2);
   });

   it('should return function that return 1 when first arguments greater than second', function () {
      var compare = compareByField('value');

      expect(compare({value: 5}, {value: 4})).to.equal(1);
      expect(compare({value: 10}, {value: 0})).to.equal(1);
      expect(compare({value: 0}, {value: -9.5})).to.equal(1);
      expect(compare({value: -5}, {value: -20})).to.equal(1);
   });

   it('should return -1 when second arguments greater than first', function () {
      var compare = compareByField('value');

      expect(compare({value: 4}, {value: 5})).to.equal(-1);
      expect(compare({value: 0}, {value: 10})).to.equal(-1);
      expect(compare({value: -9.5}, {value: 0})).to.equal(-1);
      expect(compare({value: -20}, {value: -5})).to.equal(-1);
   });

   it('should return 0 when arguments are equal', function () {
      var compare = compareByField('value');

      expect(compare({value: 0}, {value: 0})).to.equal(0);
      expect(compare({value: 100}, {value: 100})).to.equal(0);
      expect(compare({value: -923.5}, {value: -923.5})).to.equal(0);
   });
});