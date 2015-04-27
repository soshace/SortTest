var $ = require('jquery'),
   compareByField = require('./compareByField');

/**
 * Represents array element in demo.
 * @param {number} value
 * @param {number} width
 * @param {number} height
 * @constructor
 */
function Actor (value, width, height) {
   this.value = value;
   this.isActive = false;
   this.$element = $('<div class="actor"></div>').text(value).css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: width || Actor.DEFAULT_WIDTH,
      height: height || Actor.DEFAULT_HEIGHT
   });
}

/**
 * Sets actors x position.
 * @param {number} x
 */
Actor.prototype.setX = function (x) {
   this.$element.css({
      left: x
   });
};

/**
 * Gets actors x position.
 */
Actor.prototype.getX = function () {
   return parseInt(this.$element.css('left'));
};

/**
 * Sets actors y position.
 * @param {number} y
 */
Actor.prototype.setY = function (y) {
   this.$element.css({
      top: y
   });
};

/**
 * Gets actors y position.
 */
Actor.prototype.getY = function () {
   return parseInt(this.$element.css('top'));
};

/**
 * Gets actors width.
 */
Actor.prototype.getWidth = function () {
   return parseInt(this.$element.css('width'));
};

/**
 * Gets actors height.
 */
Actor.prototype.getHeight = function () {
   return parseInt(this.$element.css('height'));
};

/**
 * Sets actors active state.
 */
Actor.prototype.setActive = function (active) {
   this.isActive = active;

   if (active) {
      this.$element.addClass('active');
   } else {
      this.$element.removeClass('active');
   }
};

// Compare function
Actor.compare = compareByField('value');

// Default dimensions
Actor.DEFAULT_WIDTH = 80;
Actor.DEFAULT_HEIGHT = 150;

module.exports = Actor;
