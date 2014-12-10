var animeObjArr = [];

var animeObj = function(x, y) {
  this.x = x;
  this.y = y;
  this.frameNum = 0;
  this.maxFrameNum = 60;
  this.size = Math.random() * 2;
  this.color = {
    r: Math.floor(Math.random() * 33),
    g: Math.floor(Math.random() * 33),
    b: Math.floor(Math.random() * 33)
  }
};

animeObj.prototype.render = function() {
  ctx.beginPath();
};

animeObj.prototype.isLast = function() {
  if (this.frameNum == this.maxFrameNum) {
    return true;
  } else {
    return false;
  }
};

var render = function() {
  ctx.clearRect(0, 0, width, height);
  
  for (var i = 0; i < animeObjArr.length; i++) {
    animeObjArr[i].render();
    animeObjArr[i].frameNum++;
    if (animeObjArr[i].isLast()) {
      animeObjArr.splice(i, 1);
    };
  };
  
  setTimeout(function() {
    render();
  }, frameTime);
};

document.addEventListener('mousemove', function(event) {
  var x = event.x;
  var y = event.y;

  //animeObjArr.push(new animeObj(x, y));
}, false);

document.addEventListener('touchstart', function(event) {
  event.preventDefault();
}, false);

document.addEventListener('touchmove', function(event) {
  var x = event.touches[0].pageX;
  var y = event.touches[0].pageY;

  //animeObjArr.push(new animeObj(x, y));
}, false);

render();
