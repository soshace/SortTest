var SortAlgorithm = require('../src/SortAlgorithm'),
   numberCompare = require('../src/numberCompare');

describe('SortAlgorithm', function () {
   describe('#constructor()', function () {
      it('should set empty sorting array by default', function () {
         var sortAlgorithm = new SortAlgorithm();
         expect(sortAlgorithm.array).to.be.empty;
      });

      it('should set numberCompare as compare function by default', function () {
         var sortAlgorithm = new SortAlgorithm();

         expect(sortAlgorithm.compare).to.equal(numberCompare);
      });

      it('should obtain reset() call', function () {
         var reset = sinon.stub(SortAlgorithm.prototype, 'reset');

         new SortAlgorithm();
         reset.should.have.been.called.once;
         reset.restore();
      });
   });

   describe('#setArray()', function () {
      it('should set sorting array', function () {
         var sortAlgorithm = new SortAlgorithm();

         var array = [3, 2, 1];

         sortAlgorithm.setArray(array);
         expect(sortAlgorithm.array).to.deep.equal(array);
      });

      it('should obtain reset() call', function () {
         var reset = sinon.stub(SortAlgorithm.prototype, 'reset'),
            sortAlgorithm = new SortAlgorithm();

         sortAlgorithm.setArray([]);
         reset.should.have.been.called.once;
         reset.restore();
      });

      it('should throw type error when not an array passed', function () {
         var sortAlgorithm = new SortAlgorithm();

         expect(function () {
            sortAlgorithm.setArray('not an array');
         }).to.throw(TypeError);
      });
   });

   describe('#setCompare()', function () {
      it('should set compare function', function () {
         var sortAlgorithm = new SortAlgorithm();

         var compare = function (a, b) {};

         sortAlgorithm.setCompare(compare);
         expect(sortAlgorithm.compare).to.equal(compare);
      });

      it('should throw TypeError when not compare function or not a function passed', function () {
         var sortAlgorithm = new SortAlgorithm(),
            notCompare = function () {};

         expect(function () {
            sortAlgorithm.setCompare(notCompare);
         }).to.throw(TypeError);

         expect(function () {
            sortAlgorithm.setCompare('not a function');
         }).to.throw(TypeError);
      });
   });

   describe('#reset()', function () {
      it('should set to false isSorted variable', function () {
         var sortAlgorithm = new SortAlgorithm();

         sortAlgorithm.isSorted = true;
         sortAlgorithm.reset();
         expect(sortAlgorithm.isSorted).to.be.false;
      });
   });

   describe('#nextStep()', function () {
      it('should throw Error', function () {
         var sortAlgorithm = new SortAlgorithm();

         expect(function () {
            sortAlgorithm.nextStep();
         }).to.throw(Error);
      });
   });

   describe('#applyStep()', function () {
      it('should swap array elements if swap step passed', function () {
         var sortAlgorithm = new SortAlgorithm();

         sortAlgorithm.setArray([1, 2, 3]);
         sortAlgorithm.applyStep({
            type: SortAlgorithm.SWAP,
            first: 0,
            second: 1
         });
         expect(sortAlgorithm.array).to.deep.equal([2, 1, 3]);
      });

      it('should leave array intact if compare step passed', function () {
         var sortAlgorithm = new SortAlgorithm();

         sortAlgorithm.setArray([1, 2, 3]);
         sortAlgorithm.applyStep({
            type: SortAlgorithm.COMPARE,
            first: 0,
            second: 1
         });
         expect(sortAlgorithm.array).to.deep.equal([1, 2, 3]);
      });
   });
});
