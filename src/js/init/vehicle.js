import force3 from '../modules/force3.glmatrix.js';

const glMatrix = require('gl-matrix');

export default function() {
  const canvas = document.getElementById('stage');
  const ctx = canvas.getContext('2d');
  const vehicles_v = [];
  const vehicles_a = [];

  let time = 0;

  const init = () => {
    for (var i = 0; i < 100; i++) {
      vehicles_v.push(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        0
      );
      // vehicles_a.push(0, 0, 0);
      vehicles_a.push(
        Math.random() * 4 - 2,
        Math.random() * 4 - 2,
        0
      );
    }
  };
  const render = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (var i = 0; i < vehicles_v.length; i += 3) {
      vehicles_v[i + 0] += vehicles_a[i + 0];
      vehicles_v[i + 1] += vehicles_a[i + 1];
      vehicles_v[i + 2] += vehicles_a[i + 2];
      ctx.beginPath();
      ctx.arc(vehicles_v[i + 0], vehicles_v[i + 1], 10, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.closePath();
    }
  };
  const renderLoop = () => {
    render();
    requestAnimationFrame(() => {
      renderLoop();
    });
  };
  init();
  renderLoop();
};
