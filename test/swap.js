var swap = require('../src/swap');

describe('swap', function () {
   it('should swap array elements', function () {
      var array = [0, 1, 2, 3, 4];
      swap(array, 1, 3);
      expect(array).to.deep.equal([0, 3, 2, 1, 4]);

      var obj1 = {}, obj2 = {},
         array = [obj1, obj2];

      swap(array, 0, 1);
      expect(array).to.deep.equal([obj2, obj1]);
   });

   it('should throw TypeError when not an array passed', function () {
      expect(function () {
         swap('not an array', 6, 5);
      }).to.throw(TypeError);
   });

   it('should throw RangeError when out of range index passed', function () {
      var array = [1, 2, 3, 4, 5];

      expect(function () {
         swap(array, -1, 0);
      }).to.throw(RangeError);

      expect(function () {
         swap(array, 3.7, 1);
      }).to.throw(RangeError);

      expect(function () {
         swap(array, 3, 'not an index');
      }).to.throw(RangeError);
   });
});
