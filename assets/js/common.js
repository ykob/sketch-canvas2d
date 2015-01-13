var width  = document.body.clientWidth;
var height = document.body.clientHeight;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 60;
var frameTime = 1000 / fps;

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRadian = function(degrees) {
  return degrees * Math.PI / 180;
};

var debounce = function(object, eventType, callback){
  var timer;

  object.addEventListener(eventType, function() {
    clearTimeout(timer);
    timer = setTimeout(function(){
      callback();
    }, 500);
  }, false);
};

var canvasResize = function() {
  width  = document.body.clientWidth;
  height = document.body.clientHeight;

  canvas.width = width;
  canvas.height = height;
};

debounce(window, 'resize', function(){
  canvasResize();
});

canvasResize();
