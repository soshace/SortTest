/**
 * Compares two given numbers.
 * @param {number} a
 * @param {number} b
 * @returns {-1, 0, 1}
 */
function numberCompare (a, b) {
   if (a > b) {
      return 1;
   }

   if (a < b) {
      return -1;
   }

   return 0;
}

module.exports = numberCompare;
