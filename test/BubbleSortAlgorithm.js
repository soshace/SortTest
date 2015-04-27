var SortAlgorithm = require('../src/SortAlgorithm'),
   BubbleSortAlgorithm = require('../src/BubbleSortAlgorithm'),
   numberCompare = require('../src/numberCompare');

describe('BubbleSortAlgorithm', function () {
   describe('#reset()', function () {
      it('should obtain parent class reset() call', function () {
         var reset = sinon.stub(SortAlgorithm.prototype, 'reset'),
            sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.reset();
         reset.should.have.been.called.once;
         reset.restore();
      });

      it('should set to zero iteration variable', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.iteration = 9;
         sortAlgorithm.reset();
         expect(sortAlgorithm.iteration).to.equal(0);
      });

      it('should set to zero index variable', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.index = 9;
         sortAlgorithm.reset();
         expect(sortAlgorithm.index).to.equal(0);
      });

      it('should set to false isSwapOccurred variable', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.isSwapOccurred = true;
         sortAlgorithm.reset();
         expect(sortAlgorithm.isSwapOccurred).to.be.false;
      });
   });

   describe('#nextStep()', function () {
      it('should return next algorithm step', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.setArray([1, 2, 3]);
         expect(sortAlgorithm.nextStep()).to.deep.equal({
            type: SortAlgorithm.COMPARE,
            first: 0,
            second: 1
         });

         sortAlgorithm.setArray([3, 2, 1]);
         expect(sortAlgorithm.nextStep()).to.deep.equal({
            type: SortAlgorithm.SWAP,
            first: 0,
            second: 1
         });
      });
   });

   describe('#applyStep()', function () {
      it('should obtain parent class applyStep() call', function () {
         var applyStep = sinon.stub(SortAlgorithm.prototype, 'applyStep');
            sortAlgorithm = new BubbleSortAlgorithm(),
            step = {
               type: sortAlgorithm.COMPARE,
               first: 0,
               second: 1
            };

         sortAlgorithm.setArray([1, 2, 3]);
         sortAlgorithm.applyStep(step);
         applyStep.should.have.been.called.once;
         applyStep.should.have.been.calledWith(step);

         applyStep.restore();
      });

      it('should update correctly index variable', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();

         sortAlgorithm.setArray([3, 2, 1]);
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
         expect(sortAlgorithm.index).to.equal(1);
      });

      it('should set index to zero when iteration finished', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();
         sortAlgorithm.setArray([3, 2, 1]);
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
         expect(sortAlgorithm.index).to.equal(0);
      });

      it('should increment iteration count when iteration finished', function () {
         var sortAlgorithm = new BubbleSortAlgorithm();
         sortAlgorithm.setArray([3, 2, 1]);
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
         expect(sortAlgorithm.iteration).to.equal(1);
      });
   });

   it('should sort array', function () {
      var sortAlgorithm = new BubbleSortAlgorithm();

      sortAlgorithm.setArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
      while(!sortAlgorithm.isSorted) {
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
      }
      expect(sortAlgorithm.array).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

      sortAlgorithm.setArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      while(!sortAlgorithm.isSorted) {
         sortAlgorithm.applyStep(sortAlgorithm.nextStep());
      }
      expect(sortAlgorithm.array).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
   });
});
