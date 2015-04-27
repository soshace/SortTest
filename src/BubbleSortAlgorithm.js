var SortAlgorithm = require('./SortAlgorithm'),
   swap = require('./swap'),
   _ = require('lodash');

/**
 * Bubble sort algorithm.
 * @constructor
 */
function BubbleSortAlgorithm () {
   SortAlgorithm.apply(this);
}

BubbleSortAlgorithm.prototype = Object.create(SortAlgorithm.prototype);
BubbleSortAlgorithm.constructor = BubbleSortAlgorithm;

/**
 * @inheritdoc
 */
BubbleSortAlgorithm.prototype.reset = function () {
   SortAlgorithm.prototype.reset.apply(this);

   this.iteration = 0;
   this.index = 0;
   this.isSwapOccurred = false;
};

/**
 * @inheritdoc
 */
BubbleSortAlgorithm.prototype.nextStep = function () {
   var index = this.index,
      step = {
         type: SortAlgorithm.COMPARE,
         first: index,
         second: index + 1
      },
      array = this.array,
      compare = this.compare;

   if (compare(array[index], array[index + 1]) === 1) {
      step.type = SortAlgorithm.SWAP;
      this.isSwapOccurred = true;
   }

   return step;
};

/**
 * @inheritdoc
 */
BubbleSortAlgorithm.prototype.applyStep = function (step) {
   SortAlgorithm.prototype.applyStep.call(this, step);

   this.index++;

   if (this.index === this.array.length - this.iteration - 1) {
      if (!this.isSwapOccurred) {
         this.isSorted = true;
      }

      this.index = 0;
      this.iteration++;
      this.isSwapOccurred = false;
   }

   if (this.iteration === this.array.length - 1) {
      this.isSorted = true;
   }
};

module.exports = BubbleSortAlgorithm;
