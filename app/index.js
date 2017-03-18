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

const getClientXY = (event) => {
  switch (event.type) {
    case 'touchmove':
      const { clientX: touchX, clientY: touchY } = event.touches[0];
      return {
        clientX: touchX,
        clientY: touchY
      };

    case 'mousemove':
      const { clientX, clientY } = event;
      return {
        clientX,
        clientY
      };

    default:
      return {};
  }
};

const getCoordinates = (canvas, event) => {
  const { left, top }= canvas.getBoundingClientRect();
  const { clientX, clientY } = getClientXY(event);
  console.log(`x: ${clientX}, y: ${clientY}`);
  return {
    x: clientX - left,
    y: clientY - top
  };
};

const handleMoveEvent = (event) => {
  clearCanvas();
  drawCicleClip(
    ctx,
    getCoordinates(canvas, event)
  );
};

image.onload = () => {
  canvas.addEventListener('mousemove', handleMoveEvent);
  canvas.addEventListener('touchmove', handleMoveEvent);
};
