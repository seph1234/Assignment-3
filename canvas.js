var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
drawGround();
drawHouse();
// fuction for drawing ground
function drawGround() {
var centerX = 0;
var centerY = 0;
var radius = 50;

// save state
ctx.save();
// translate context so height is 1/3'rd from top of enclosing circle
ctx.translate(canvas.width / 2, canvas.height / 2);
// scale context horizontally by 300%
ctx.scale(3, 1);
// draw circle which will be stretched into an oval
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// restore to original state
ctx.restore();
// apply styling
var grd = ctx.createRadialGradient(250, 250, 80, 250, 250, 190);
grd.addColorStop(0, 'green');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

// function for house
function drawHouse(){
var x = canvas.width / 2;
var y = canvas.height / 2;
// sidewall
ctx.beginPath();
ctx.moveTo(x,y - 90);
ctx.lineTo(x - 100,y - 120);
ctx.lineTo(x - 100,y - 30);
ctx.lineTo(x,y);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// house body
ctx.beginPath();
ctx.rect(x, y - 90, 90, 90);
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// window1
ctx.beginPath();
ctx.rect(x + 20, y - 70, 20, 20);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// window2
ctx.beginPath();
ctx.rect(x + 60, y - 70, 20, 20);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// window lines
ctx.beginPath();
ctx.moveTo(x + 30, y - 50);
ctx.lineTo(x + 30, y - 70);
ctx.moveTo(x + 20, y - 60);
ctx.lineTo(x + 40, y - 60);
ctx.moveTo(x + 70, y - 70);
ctx.lineTo(x + 70, y - 50);
ctx.moveTo(x + 60, y - 60);
ctx.lineTo(x + 80, y - 60);
ctx.closePath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// door
ctx.beginPath();
ctx.rect(x + 40, y - 30, 20, 30);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// doornob
ctx.beginPath();
ctx.arc(x + 55, y - 11, 2, 0, 2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// roof
ctx.beginPath();
ctx.moveTo(x,y - 90);
ctx.lineTo(x + 90,y - 90);
ctx.lineTo(x + 50,y - 120);
ctx.lineTo(x, y - 90);
ctx.moveTo(x + 50, y - 120);
ctx.lineTo(x - 30, y - 140);
ctx.lineTo(x - 100, y - 120);
ctx.lineTo(x, y - 90);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'white';
ctx.stroke();

// body decor

// roof decor

// chimney
ctx.beginPath();
ctx.rect(x - 50, y - 150, 10, 30);
ctx.rect(x - 55, y - 160, 20, 10)
ctx.closePath();
ctx.fillStyle = 'brown';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}




