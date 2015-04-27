/**
 * Returns function that compares two objects by field.
 * @param {mixed} field
 * @returns {Function}
 */
function compareByField (field) {
   return function (a, b) {
      if (a[field] > b[field]) {
         return 1;
      }

      if (a[field] < b[field]) {
         return -1;
      }

      return 0;
   };
}

module.exports = compareByField;
