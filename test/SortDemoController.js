var $ = require('jquery'),
   SortDemoController = require('../src/SortDemoController'),
   Actor = require('../src/Actor');

describe('SortDemoController', function () {
   describe('#constructor()', function () {
      it('should throw TypeError if non jQuery object passed', function () {
         expect(function () {
            new SortDemoController('non jQuery object');
         }).to.throw(TypeError);
      });

      it('should set $element', function () {
         var $element = $('<div></div>'),
            demoController = new SortDemoController($element);

         expect(demoController.$element).to.equal($element);
      });

      it('should set empty actors list', function () {
         var demoController = new SortDemoController($('<div></div>'));

         expect(demoController.actors).to.be.empty;
      });
   });

   describe('#addActor()', function () {
      it('should add actor to list', function () {
         var demoController = new SortDemoController($('<div></div>')),
            actor = new Actor(5);

         demoController.addActor(actor);
         expect(demoController.actors.pop()).to.equal(actor);
      });

      it('should throw TypeError when not an actor passed', function () {
         var demoController = new SortDemoController($('<div></div>'));

         expect(function () {
            demoController.addActor('not an actor');
         }).to.throw(TypeError);
      });

      it('should add actor element to $element', function () {
         var demoController = new SortDemoController($('<div></div>')),
            actor = new Actor(5);

         demoController.addActor(actor);
         expect(demoController.$element.children().length).to.equal(1);
      });

      it('should set actors x position', function () {
         var demoController = new SortDemoController($('<div></div>')),
            firstActor = new Actor(6),
            secondActor = new Actor(5);

         demoController.addActor(firstActor);
         demoController.addActor(secondActor);
         expect(firstActor.getX()).to.equal(0);
         expect(secondActor.getX()).to.equal(firstActor.getWidth());
      });
   });
});