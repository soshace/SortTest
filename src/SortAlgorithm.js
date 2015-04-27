var numberCompare = require('./numberCompare'),
   swap = require('./swap'),
   _ = require('lodash');

/**
 * Sort algorithm abstract class.
 * @constructor
 */
function SortAlgorithm () {
   this.array = [];
   this.compare = numberCompare;
   this.reset();
}

/**
 * Sets array to sort.
 * @param {Array} array
 */
SortAlgorithm.prototype.setArray = function (array) {
   if (!_.isArray(array)) {
      throw new TypeError('Array should be instance of Array.');
   }

   this.array = array;
   this.reset();
};

/**
 * Sets compare function.
 * @param {Function} compare
 */
SortAlgorithm.prototype.setCompare = function (compare) {
   if (!_.isFunction(compare) || compare.length !== 2) {
      throw new TypeError('Compare should be callable and should take two arguments.');
   }

   this.compare = compare;
};

/**
 * Applies given algorithm step.
 * @param {Object} step {type: <operation>, first: <index>, second: <index>}
 */
SortAlgorithm.prototype.applyStep = function (step) {
   if (this.isSorted) {
      throw new Error('Array is already sorted.');
   }

   if (step.type === SortAlgorithm.SWAP) {
      swap(this.array, step.first, step.second);
   }
};

/**
 * Returns next algorithm step
 * @return {Object} {type: <operation>, first: <index>, second: <index>}
 */
SortAlgorithm.prototype.nextStep = function () {
   throw new Error('nextStep() method should be implemented in subclass.');
};

/**
 * Sets sort algorithm specific variables
 */
SortAlgorithm.prototype.reset = function () {
   this.isSorted = false;
};

SortAlgorithm.COMPARE = 'compare';
SortAlgorithm.SWAP = 'swap';

module.exports = SortAlgorithm;
