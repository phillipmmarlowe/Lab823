window.onload = init;//  After the window has been loaded, go to init

// global variables for canvas and context
var canvas;
var ctx;
var x, y, dx, dy, radius;
radius = 20;
var Ball1;
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


  x = Math.random()*canvas.width;
  y= Math.random()*canvas.height;
  dx = Math.random()*10 - 5;
  dy = Math.random()*10 - 5;
  //var Ball1;
  Ball1=ballFactory();
  animate(Ball1);

}

function animate(Ball){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvas.width, canvas.height);
	'ctx.strokeStyle = rgba(55,50,220);'
	ctx.beginPath();
	ctx.arc(Ball.Ballx,Ball.Bally,Ball.BallRad, 0, Math.PI*2, false);
	ctx.stroke();
	x += dx;
	y += dy;
	if(x > canvas.width || x < 0)  dx = -dx;
	if(y > canvas.height || y < 0)  dy = -dy;
	//requestAnimationFrame(animate);
}
//  JavaScript object patterns
//  One:Ball Factory:: Build and return a Ball
function ballFactory(){
	var Ball= {
		BallRad:radius,
    Ballx:x,
    Bally:y,
    //getRadius:function(){
	 //return rad;
	//}
  }
return Ball;
}

// Two:Constructor function:: Simplifies the code above
function Ball(rad){
    this.radius = rad;
	this.getDiameter = function(){
		return this.rad*2;
		}
}

//  Three:Add a method to the prototype
Ball.prototype.getArea = function () {
	return this.radius*this.radius*Math.PI;
};

// Four:Classical syntax::Hand holding for Java programmers
// Where does the function "getDiameter()" end up?
class ClassyBall{
    constructor(rad){
		this.rad = rad;
	}
	getDiameter(){
		return this.rad*2;
	}
}
