var Get = require('./get');
var get = new Get();
var debounce = require('./debounce');

var bodyWidth = document.body.clientWidth;
var bodyHeight = document.body.clientHeight;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 60;
var lastTimeRender = +new Date();

var movers = [];

var init = function() {
  renderloop();
  setEvent();
  resizeCanvas();
  debounce(window, 'resize', function(event){
    resizeCanvas();
  });
};

var render = function() {
  ctx.clearRect(0, 0, bodyWidth, bodyHeight);
};

var renderloop = function() {
  var now = +new Date();
  requestAnimationFrame(renderloop);

  if (now - lastTimeRender > 1000 / fps) {
    render();
    lastTimeRender = +new Date();
  }
};

var resizeCanvas = function() {
  bodyWidth  = document.body.clientWidth * 2;
  bodyHeight = document.body.clientHeight * 2;

  canvas.width = bodyWidth;
  canvas.height = bodyHeight;
  canvas.style.width = bodyWidth / 2 + 'px';
  canvas.style.height = bodyHeight / 2 + 'px';
};

var setEvent = function () {
  var eventTouchStart = function(x, y) {
  };
  
  var eventTouchMove = function(x, y) {
  };
  
  var eventTouchEnd = function(x, y) {
  };

  canvas.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  canvas.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });

  canvas.addEventListener('mousedown', function (event) {
    event.preventDefault();
    eventTouchStart(event.clientX, event.clientY);
  });

  canvas.addEventListener('mousemove', function (event) {
    event.preventDefault();
    eventTouchMove(event.clientX, event.clientY);
  });

  canvas.addEventListener('mouseup', function (event) {
    event.preventDefault();
    eventTouchEnd();
  });

  canvas.addEventListener('touchstart', function (event) {
    event.preventDefault();
    eventTouchStart(event.touches[0].clientX, event.touches[0].clientY);
  });

  canvas.addEventListener('touchmove', function (event) {
    event.preventDefault();
    eventTouchMove(event.touches[0].clientX, event.touches[0].clientY);
  });

  canvas.addEventListener('touchend', function (event) {
    event.preventDefault();
    eventTouchEnd();
  });
};

init();
