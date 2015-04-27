var _ = require('lodash');

/**
 * Swaps array's elements.
 * @param {Array} array
 * @param {number} i Index
 * @param {number} j Index
 */
function swap (array, i, j) {
   if (!_.isArray(array)) {
      throw new TypeError('Array should be instance of Array.');
   }

   if (!array.hasOwnProperty(i)) {
      throw new RangeError('First swap element index is out of range.');
   }

   if (!array.hasOwnProperty(j)) {
      throw new RangeError('Second swap element index is out of range.');
   }

   var temp = array[i];
   array[i] = array[j];
   array[j] = temp;
}

module.exports = swap;
