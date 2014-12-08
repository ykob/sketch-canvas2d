var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2D');
var fps = 30;
var frameTime = 1000 / fps;

var toRadian = function(degrees) {
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
  width  = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
}

debounce(window, 'resize', function(){
  canvasResize();
});

canvasResize();