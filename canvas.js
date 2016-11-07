var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
drawGround();
drawHouse();
//drawSmoke();
//drawSmoke2();
//drawSmoke3();
//drawSmoke4();
// fuction for drawing ground
function drawGround() {
var centerX = 0;
var centerY = 0;
var radius = 50;

// save state
ctx.save();
// translate context so height is 1/3'rd from top of enclosing circle
ctx.translate(canvas.width / 2, canvas.height / 2 + 100);
// scale context horizontally by 300%
ctx.scale(3, 1);
// draw circle which will be stretched into an oval
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// restore to original state
ctx.restore();
// apply styling
var grd = ctx.createRadialGradient(250, 250, 120, 250, 250, 220);
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
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);

// sidewall
ctx.beginPath();
ctx.moveTo(x,y +110);
ctx.lineTo(x - 100,y + 70);
ctx.lineTo(x - 100,y - 20);
ctx.lineTo(x,y + 20);
ctx.closePath();
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// house body
ctx.beginPath();
ctx.rect(x, y + 20, 90, 90);
ctx.closePath();
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// window1
ctx.beginPath();
ctx.rect(x + 20, y + 40, 20, 20);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// window2
ctx.beginPath();
ctx.rect(x + 60, y + 40, 20, 20);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// window lines
ctx.beginPath();
ctx.moveTo(x + 30, y + 40);
ctx.lineTo(x + 30, y + 60);
ctx.moveTo(x + 20, y + 50);
ctx.lineTo(x + 40, y + 50);
ctx.moveTo(x + 70, y + 40);
ctx.lineTo(x + 70, y + 60);
ctx.moveTo(x + 60, y + 50);
ctx.lineTo(x + 80, y + 50);
ctx.closePath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// door
ctx.beginPath();
ctx.rect(x + 40, y + 80, 20, 30);
ctx.closePath();
ctx.fillStyle = 'white';
ctx.fill();

// doornob
ctx.beginPath();
ctx.arc(x + 55, y + 100, 2, 0, 2*Math.PI);
ctx.fillStyle = 'black';
ctx.fill();

// roof
ctx.beginPath();
ctx.moveTo(x,y + 20);
ctx.lineTo(x + 90,y + 20);
ctx.lineTo(x + 50,y - 10);
ctx.lineTo(x, y + 20);
ctx.moveTo(x + 50, y - 10);
ctx.lineTo(x - 30, y - 40);
ctx.lineTo(x - 100, y - 20);
ctx.lineTo(x, y + 20);
ctx.closePath();
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'white';
ctx.stroke();

// chimney
ctx.beginPath();
ctx.rect(x - 50, y - 50, 10, 30);
ctx.rect(x - 55, y - 60, 20, 10)
ctx.closePath();
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

//function for smoke
function drawSmoke(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.beginPath();
ctx.moveTo(195,180);
ctx.quadraticCurveTo(180,170,200,170);
ctx.quadraticCurveTo(210,150,217,170);
ctx.quadraticCurveTo(240,170,220,180);
ctx.quadraticCurveTo(225,195,208,185);
ctx.quadraticCurveTo(195,195,195,180);
ctx.closePath();
grd.addColorStop(0, 'grey');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

// function for smoke animation 1
function drawSmoke4(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.beginPath();
ctx.moveTo(200,175);
ctx.quadraticCurveTo(180,160,205,165);
ctx.quadraticCurveTo(210,150,217,165);
ctx.quadraticCurveTo(240,170,220,175);
ctx.quadraticCurveTo(225,195,208,180);
ctx.quadraticCurveTo(190,190,200,175);
ctx.closePath();
grd.addColorStop(0, 'grey');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

//function for smoke2
function drawSmoke2(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.beginPath();
ctx.moveTo(170,150);
ctx.quadraticCurveTo(150,130,180,140);
ctx.quadraticCurveTo(190,110,210,140);
ctx.quadraticCurveTo(230,140,210,150);
ctx.quadraticCurveTo(200,170,190,160);
ctx.quadraticCurveTo(160,170,170,150);
ctx.closePath();
grd.addColorStop(0, 'grey');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

//function for smoke3
function drawSmoke3(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.beginPath();
ctx.moveTo(110,100);
ctx.quadraticCurveTo(100,80,140,90);
ctx.quadraticCurveTo(150,50,180,90);
ctx.quadraticCurveTo(200,100,180,110);
ctx.quadraticCurveTo(180,130,150,110);
ctx.quadraticCurveTo(110,130,130,100);
ctx.closePath();
grd.addColorStop(0, 'grey');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

var counter = setInterval (function() {

 document.querySelector('input[type=range]').value = 50;

 counter++;
 if (counter % 3 == 1) {
	ctx.clearRect(0, 0, 500, 190);
	drawSmoke3();
	counter = 0;
	counter++
 } else if (counter % 2==1) {
	ctx.clearRect(0, 0, 500, 190);
	drawSmoke2();
 } else{
	ctx.clearRect(0, 0, 500, 190);
	drawSmoke();
 }
}, 1000);




