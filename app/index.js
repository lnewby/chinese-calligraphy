// import PuzzleBoard from './PuzzleBoard.js';
// import Peg from './Peg.js';
// import Torus from './Torus.js';
//
// const torusStack = Array(6).fill(0).map((v, index) => {
//   const size = index+1;
//   return new Torus({size});
// });
// const pegs = [new Peg({torusStack})];
//
// PuzzleBoard({pegs});


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();

canvas.width = 800;
canvas.height = 600;
canvas.style.backgroundColor = 'white';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.padding = '0px';
canvas.style.margin = '0px';
canvas.style.cursor = 'crosshair';
document.body.appendChild(canvas);
image.src = 'assets/lance.jpg';

const clearCanvas = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawCicleClip = (ctx, {x, y}) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2*Math.PI);
  ctx.clip();
  ctx.drawImage(image, 0, 0, 800, 800 * image.height / image.width);
  ctx.restore();
};

const getMouseCoordinates = (canvas, {clientX, clientY}) => {
  const { left, top }= canvas.getBoundingClientRect();
  return {
    x: clientX - left,
    y: clientY - top
  };
};

const handleEvent = (event) => {
  clearCanvas();
  drawCicleClip(
    ctx,
    getMouseCoordinates(canvas, event)
  );
};

image.onload = () => {
  canvas.addEventListener('mousemove', handleEvent);
  canvas.addEventListener('touchmove', handleEvent);
};

// Create canvas for Hanoi game
// const canvas = document.getElementById('hanoiCanvas');
// const ctx = canvas.getContext('2d');
//
// const drawTower = () => {
//   ctx.fillStyle = '#0FF';
//   ctx.fillRect(canvas.width/2, canvas.height-10, 75, 10);
//
//   ctx.fillStyle = '#FF0';
//   ctx.fillRect(canvas.width/2+10, canvas.height-20, 55, 10);
//
//   ctx.fillStyle = '#F0F';
//   ctx.fillRect(canvas.width/2+20, canvas.height-30, 35, 10);
//
//   ctx.fillStyle = '#00F';
//   ctx.fillRect(canvas.width/2+30, canvas.height-40, 15, 10);
// }
//
// drawTower();
