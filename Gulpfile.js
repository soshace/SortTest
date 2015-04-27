var gulp = require('gulp'),
    util = require('gulp-util'),
    express = require('express'),
    browserifyMiddleware = require('browserify-middleware');

gulp.task('server', function () {
   var port = process.env.PORT || 8080,
       app = express();

   app.use('/src', browserifyMiddleware(__dirname + '/src'));
   app.use('/', express.static(__dirname));
   app.listen(port);

   util.log(util.colors.green('Server started at 0.0.0.0:' + port));
});

gulp.task('default', ['server']);
