var $ = require('jquery'),
   SortDemoController = require('./SortDemoController'),
   BubbleSortAlgorithm = require('./BubbleSortAlgorithm'),
   Actor = require('./Actor');

var $before = $('.sort-demo.before'),
    $after = $('.sort-demo.after'),
    beforeDemo = new SortDemoController($before, new BubbleSortAlgorithm()),
    afterDemo =  new SortDemoController($after, new BubbleSortAlgorithm());

for (var i = 0; i < 9; i++) {
	var value = Math.round(Math.random() * 100);
	beforeDemo.addActor(new Actor(value));
	afterDemo.addActor(new Actor(value));
}

var started = false;
$('.start-button').click(function () {
   if (started) {
      return;
   }

   started = true;

	afterDemo.start();
});
