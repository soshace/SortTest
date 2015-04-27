var $ = require('jquery'),
   _ = require('lodash'),
   SortAlgorithm = require('./SortAlgorithm'),
   Actor = require('./Actor');

/**
 * Sort demo controller.
 * @param {jQeury} $element
 * @param {SortAlgorithm} sortAlgorithm
 * @constructor
 */
function SortDemoController ($element, sortAlgorithm) {
   if (!($element instanceof $)) {
      throw new TypeError('$element should jQuery object.');
   }

   this.$element = $element;
   this.actors = [];
   this.sortAlgorithm = sortAlgorithm;
}

/**
 * Adds actor to demo.
 * @param actor
 */
SortDemoController.prototype.addActor = function (actor) {
   if (!(actor instanceof Actor)) {
      throw new TypeError('actor should be instance of Actor.');
   }

   var lastActor = null;
   if (this.actors.length) {
      lastActor = this.actors[this.actors.length - 1];
   }

   this.actors.push(actor);
   this.$element.append(actor.$element);

   if (!_.isNull(lastActor)) {
      actor.setX(lastActor.getX() + lastActor.getWidth());
   }
};

/**
 * Animate swap operation.
 * @param {number} first First actor index.
 * @param {number} second Second actor index.
 * @param {Function} callback Called after finish.
 */
SortDemoController.prototype.swap = function (first, second, callback) {
   first = this.actors[first];
   second = this.actors[second];

   var finished = 0,
      finishCallback = (function () {
         finished++;

         if (finished === 2) {
            first.setActive(false);
            second.setActive(false);
            callback.apply(this);
         }
      }).bind(this);

   first.setActive(true);
   second.setActive(true);

   var firstX = first.getX(),
      secondX = second.getX();
   first.$element.animate({
      left: secondX
   }, {
      duration: 3300,
      step: function (left) {
         first.$element.css({
            top: 50 * Math.sin((left - firstX) / (secondX - firstX) * Math.PI)
         });
      },
      complete: finishCallback
   });

   second.$element.animate({
      left: firstX
   }, {
      duration: 3300,
      step: function (left) {
         second.$element.css({
            top: 30 * Math.sin((firstX - left) / (secondX - firstX) * Math.PI)
         });
      },
      complete: finishCallback
   });
};

/**
 * Animate compare operation.
 * @param {number} first First actor index.
 * @param {number} second Second actor index.
 * @param {Function} callback Called after finish.
 */
SortDemoController.prototype.activate = function (first, second, callback) {
   first = this.actors[first];
   second = this.actors[second];

   first.setActive(true);
   second.setActive(true);

   setTimeout((function () {
      first.setActive(false);
      second.setActive(false);
      callback.apply(this);
   }).bind(this), 1650);
};

/**
 * Play sort demonstration.
 * @param {Function} callback Called after finish.
 */
SortDemoController.prototype.start = function (callback) {
   this.sortAlgorithm.setArray(this.actors);
   this.sortAlgorithm.setCompare(Actor.compare);

   var step = (function () {
      var nextStep = this.sortAlgorithm.nextStep();
      this.sortAlgorithm.applyStep(nextStep);
      this.applyStep(nextStep, (function () {
         if (!this.sortAlgorithm.isSorted) {
            step();
         }
      }).bind(this));

   }).bind(this);

   step();
};

/**
 * Apply algorithm step.
 * @param {Object} step {type: <operation>, first: <index>, second: <index>}
 * @param callback Called after finish.
 */
SortDemoController.prototype.applyStep = function (step, callback) {
   if (step.type === SortAlgorithm.COMPARE) {
      this.activate(step.first, step.second, callback);
   } else if (step.type === SortAlgorithm.SWAP) {
      this.swap(step.first, step.second, callback);
   }
};

module.exports = SortDemoController;
