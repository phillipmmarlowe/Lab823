window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var x, y, dx, dy, radius;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 5px';
  canvas.style.backgroundColor = 'rgba(222,88,15, .5)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context

  
  x = Math.random()*window.innerWidth;
  y= Math.random()*window.innerHeight;
  dx = Math.random()*10 - 5;
  dy = Math.random()*10 - 5;
  animate();
}

function animate(){
  radius = 30;
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.strokeStyle = 'rgba(55,50,220)';
  ctx.beginPath();
  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.stroke();
  x += dx;
  y += dy;
  if(x > window.innerWidth || x < 0)  dx = -dx;
  if(y > window.innerHeight || y < 0)  dy = -dy;
}
