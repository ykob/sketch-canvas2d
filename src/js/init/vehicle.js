import force3 from '../modules/force3.glmatrix.js';

const glMatrix = require('gl-matrix');

export default function() {
  const canvas = document.getElementById('stage');
  const ctx = canvas.getContext('2d');
  const vehicles = [];

  let time = 0;

  const render = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.arc(window.innerWidth / 2, window.innerHeight / 2, 100, 0, Math.PI * 2, false);
    ctx.fill();
  };
  const renderLoop = () => {
    render();
    requestAnimationFrame(() => {
      renderLoop();
    });
  };
  renderLoop();
};
