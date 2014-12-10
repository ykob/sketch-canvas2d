var width = window.innerWidth;
var height = window.innerHeight;
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

var getDistance = function(p1x, p1y, p2x, p2y) {
  var dx = p2x - p1x;
  var dy = p2y - p1y;
  return Math.sqrt(dx * dx + dy * dy);
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
  width  = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
}

debounce(window, 'resize', function(){
  canvasResize();
});

canvasResize();
