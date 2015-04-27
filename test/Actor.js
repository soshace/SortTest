var Actor = require('../src/Actor'),
   $ = require('jquery');

describe('Actor', function () {
   describe('#constructor()', function () {
      it('should set value', function () {
         var value = 5,
            actor = new Actor(value);

         expect(actor.value).to.equal(value);
      });

      it('should set x position', function () {
         var actor = new Actor(5);

         expect(actor.getX()).to.equal(0);
      });

      it('should set y position', function () {
         var actor = new Actor(5);

         expect(actor.getY()).to.equal(0);
      });

      it('should set width', function () {
         var actor = new Actor(5, 320, 280);

         expect(actor.getWidth()).to.equal(320);
      });

      it('should set default width when isn\'t passed', function () {
         var actor = new Actor(5);

         expect(actor.getWidth()).to.equal(Actor.DEFAULT_WIDTH);
      });

      it('should set height', function () {
         var actor = new Actor(5, 320, 280);

         expect(actor.getHeight()).to.equal(280);
      });

      it('should set default height when isn\'t passed', function () {
         var actor = new Actor(5);

         expect(actor.getHeight()).to.equal(Actor.DEFAULT_HEIGHT);
      });

      it('should set default activity', function () {
         var actor = new Actor(5);

         expect(actor.isActive).to.be.false;
      });

      it('should create div element with class, text and css', function () {
         var value = 5,
            actor = new Actor(value),
            $element = actor.$element;

         expect($element.length).to.equal(1);
         expect(parseInt($element.text())).to.equal(value);
         expect($element.hasClass('actor')).to.be.true;
         expect($element.css('position')).to.equal('absolute');
         expect($element.prop('tagName')).to.equal('DIV');
      });
   });

   describe('#setX()', function () {
      it('should set element x position', function () {
         var actor = new Actor(5);

         actor.setX(10);
         expect(actor.getX()).to.equal(10);
      });

      it('should update element x position', function () {
         var actor = new Actor(5);

         actor.setX(10);
         expect(actor.getX()).to.equal(10);
      });
   });

   describe('#setY()', function () {
      it('should set element y position', function () {
         var actor = new Actor(5);

         actor.setY(10);
         expect(actor.getY()).to.equal(10);
      });

      it('should update element y position', function () {
         var actor = new Actor(5);

         actor.setY(10);
         expect(actor.getY()).to.equal(10);
      });
   });

   describe('#setActive()', function () {
      it('should set activity', function () {
         var actor = new Actor(5);

         actor.setActive(true);
         expect(actor.isActive).to.be.true;
         actor.setActive(false);
         expect(actor.isActive).to.be.false;
      });

      it('should update element class', function () {
         var actor = new Actor(5),
            $element = actor.$element;

         actor.setActive(true);
         expect($element.hasClass('active')).to.be.true;
         actor.setActive(false);
         expect($element.hasClass('active')).to.be.false;
      });
   });
});