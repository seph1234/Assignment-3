var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
drawGround();
drawHouse();
drawSky();
//drawSmoke();
//drawSmoke2();
//drawSmoke3();
//drawSmoke4();

 var counter = setInterval (function() {
 counter++;
 if (counter % 3 == 1) {
	ctx.clearRect(0, 130, 500, 160);
	drawSmoke3();
	counter = 0;
	counter++
 } else if (counter % 2 == 1) {
	ctx.clearRect(0, 130, 500, 160);
	drawSmoke2();
 } else{
	ctx.clearRect(0, 130, 500, 160);
	drawSmoke();
 }

 } , 1000);
// function for drawing sky
function drawSky() {
var x = 0;
var y = 50;
ctx.beginPath();
ctx.rect(x, y - 50, 500, 100);
ctx.moveTo(x,100);
ctx.quadraticCurveTo(x + 50, y + 100, 100, 100);
ctx.quadraticCurveTo(x + 150, y + 100, 200, 100);
ctx.quadraticCurveTo(x + 250, y + 100, 300, 100);
ctx.quadraticCurveTo(x + 350, y + 100, 400, 100);
ctx.quadraticCurveTo(x + 450, y + 100, 500, 100);
ctx.closePath();
// apply styling
var grd = ctx.createRadialGradient(250, 250, 0, 250, 250, 300);
grd.addColorStop(0, 'black');
grd.addColorStop(1, 'grey');
ctx.fillStyle = grd;
ctx.fill();
}
// function for drawing ground
function drawGround() {
var centerX = 0;
var centerY = 0;
var radius = 50;

// save state
ctx.save();
// translate context
ctx.translate(canvas.width / 2, canvas.height / 2 +200);
// scale context horizontally by 600%
ctx.scale(6, 1);
// draw circle which will be stretched into an oval
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// restore to original state
ctx.restore();
// apply styling
var grd = ctx.createRadialGradient(250, 250, 250, 250, 250, 200);
grd.addColorStop(0, 'green');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
}

// function for drawing house
function drawHouse(){
var x = canvas.width / 2;
var y = canvas.height / 2;
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
// save state
ctx.save();
// translate context
ctx.translate(canvas.width / 2 -480, canvas.height / 2 -140 );
// scale context horizontally by 200%
ctx.scale(2,1);

// drawing for side wall
ctx.beginPath();
ctx.moveTo(x,y +110);
ctx.lineTo(x - 100,y + 60);
ctx.lineTo(x - 100,y - 30);
ctx.lineTo(x,y + 20);
ctx.closePath();
// apply styling
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// drawing for side wall bricks
ctx.beginPath();
ctx.moveTo(x,y + 100);
ctx.lineTo(x - 100,y + 50);

ctx.moveTo(x,y + 90);
ctx.lineTo(x - 100,y + 40);

ctx.moveTo(x,y + 80);
ctx.lineTo(x - 100,y + 30);

ctx.moveTo(x,y + 70);
ctx.lineTo(x - 100,y + 20);

ctx.moveTo(x,y + 60);
ctx.lineTo(x - 100,y + 10);

ctx.moveTo(x,y + 50);
ctx.lineTo(x - 100,y);

ctx.moveTo(x,y + 40);
ctx.lineTo(x - 100,y - 10);

ctx.moveTo(x,y + 30);
ctx.lineTo(x - 100,y - 20);

// pattern 1
ctx.moveTo(x-10,y + 10);
ctx.lineTo(x-10,y + 25);

ctx.moveTo(x-30,y);
ctx.lineTo(x-30,y + 15);

ctx.moveTo(x-50,y - 10);
ctx.lineTo(x-50,y + 5);

ctx.moveTo(x-70,y - 20);
ctx.lineTo(x-70,y - 5);

ctx.moveTo(x-90,y - 30);
ctx.lineTo(x-90,y - 15);

///////////////////////2
ctx.moveTo(x-10,y + 45);
ctx.lineTo(x-10,y + 35);

ctx.moveTo(x-30,y + 25);
ctx.lineTo(x-30,y + 35);

ctx.moveTo(x-50,y + 15);
ctx.lineTo(x-50,y + 25);

ctx.moveTo(x-70,y + 15);
ctx.lineTo(x-70,y + 5);

ctx.moveTo(x-90,y - 5);
ctx.lineTo(x-90,y + 5);

///////////////////////3
ctx.moveTo(x-10,y + 65);
ctx.lineTo(x-10,y + 55);

ctx.moveTo(x-30,y + 45);
ctx.lineTo(x-30,y + 55);

ctx.moveTo(x-50,y + 35);
ctx.lineTo(x-50,y + 45);

ctx.moveTo(x-70,y + 35);
ctx.lineTo(x-70,y + 25);

ctx.moveTo(x-90,y + 15);
ctx.lineTo(x-90,y + 25);

///////////////////////4
ctx.moveTo(x-10,y + 85);
ctx.lineTo(x-10,y + 75);

ctx.moveTo(x-30,y + 65);
ctx.lineTo(x-30,y + 75);

ctx.moveTo(x-50,y + 55);
ctx.lineTo(x-50,y + 65);

ctx.moveTo(x-70,y + 55);
ctx.lineTo(x-70,y + 45);

ctx.moveTo(x-90,y + 35);
ctx.lineTo(x-90,y + 45);

///////////////////////5
ctx.moveTo(x-10,y + 105);
ctx.lineTo(x-10,y + 95);

ctx.moveTo(x-30,y + 85);
ctx.lineTo(x-30,y + 95);

ctx.moveTo(x-50,y + 75);
ctx.lineTo(x-50,y + 85);

ctx.moveTo(x-70,y + 75);
ctx.lineTo(x-70,y + 65);

ctx.moveTo(x-90,y + 55);
ctx.lineTo(x-90,y + 65);


// pattern 2
ctx.moveTo(x-80,y - 10);
ctx.lineTo(x-80,y + 0);

ctx.moveTo(x-60,y + 10);
ctx.lineTo(x-60,y + 0);

ctx.moveTo(x-40,y + 20);
ctx.lineTo(x-40,y + 10);

ctx.moveTo(x-20,y + 30);
ctx.lineTo(x-20,y + 20);

///////////////////////2
ctx.moveTo(x-80,y + 20);
ctx.lineTo(x-80,y + 10);

ctx.moveTo(x-60,y + 30);
ctx.lineTo(x-60,y + 20);

ctx.moveTo(x-40,y + 40);
ctx.lineTo(x-40,y + 30);

ctx.moveTo(x-20,y + 50);
ctx.lineTo(x-20,y + 40);

///////////////////////3
ctx.moveTo(x-80,y + 40);
ctx.lineTo(x-80,y + 30);

ctx.moveTo(x-60,y + 50);
ctx.lineTo(x-60,y + 40);

ctx.moveTo(x-40,y + 60);
ctx.lineTo(x-40,y + 50);

ctx.moveTo(x-20,y + 70);
ctx.lineTo(x-20,y + 60);

///////////////////////4
ctx.moveTo(x-80,y + 60);
ctx.lineTo(x-80,y + 50);

ctx.moveTo(x-60,y + 70);
ctx.lineTo(x-60,y + 60);

ctx.moveTo(x-40,y + 80);
ctx.lineTo(x-40,y + 70);

ctx.moveTo(x-20,y + 90);
ctx.lineTo(x-20,y + 80);

ctx.closePath();
ctx.lineWidth = 0.3;
ctx.strokeStyle = 'black';
ctx.stroke();

// drawing for house body
ctx.beginPath();
ctx.rect(x, y + 20, 90, 90);
ctx.closePath();
// apply styling
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();

// drawing for body bricks
ctx.beginPath();
ctx.moveTo(x, y + 30);
ctx.lineTo(x + 90, y + 30);
ctx.moveTo(x, y + 40);
ctx.lineTo(x + 90, y + 40);
ctx.moveTo(x, y + 50);
ctx.lineTo(x + 90, y + 50);
ctx.moveTo(x, y + 60);
ctx.lineTo(x + 90, y + 60);
ctx.moveTo(x, y + 70);
ctx.lineTo(x + 90, y + 70);
ctx.moveTo(x, y + 80);
ctx.lineTo(x + 90, y + 80);
ctx.moveTo(x, y + 90);
ctx.lineTo(x + 90, y + 90);
ctx.moveTo(x, y + 100);
ctx.lineTo(x + 90, y + 100);

ctx.moveTo(x + 30, y + 10);
ctx.lineTo(x + 30, y + 30);
ctx.moveTo(x + 60, y + 10);
ctx.lineTo(x + 60, y + 30);

ctx.moveTo(x + 15, y + 30);
ctx.lineTo(x + 15, y + 40);
ctx.moveTo(x + 45, y + 30);
ctx.lineTo(x + 45, y + 40);
ctx.moveTo(x + 75, y + 30);
ctx.lineTo(x + 75, y + 40);

ctx.moveTo(x + 15, y + 50);
ctx.lineTo(x + 15, y + 60);
ctx.moveTo(x + 45, y + 50);
ctx.lineTo(x + 45, y + 60);
ctx.moveTo(x + 75, y + 50);
ctx.lineTo(x + 75, y + 60);

ctx.moveTo(x + 30, y + 60);
ctx.lineTo(x + 30, y + 70);
ctx.moveTo(x + 60, y + 60);
ctx.lineTo(x + 60, y + 70);

ctx.moveTo(x + 15, y + 70);
ctx.lineTo(x + 15, y + 80);
ctx.moveTo(x + 45, y + 70);
ctx.lineTo(x + 45, y + 80);
ctx.moveTo(x + 75, y + 70);
ctx.lineTo(x + 75, y + 80);

ctx.moveTo(x + 30, y + 80);
ctx.lineTo(x + 30, y + 90);
ctx.moveTo(x + 60, y + 80);
ctx.lineTo(x + 60, y + 90);

ctx.moveTo(x + 15, y + 90);
ctx.lineTo(x + 15, y + 100);
ctx.moveTo(x + 45, y + 90);
ctx.lineTo(x + 45, y + 100);
ctx.moveTo(x + 75, y + 90);
ctx.lineTo(x + 75, y + 100);

ctx.moveTo(x + 30, y + 100);
ctx.lineTo(x + 30, y + 110);
ctx.moveTo(x + 60, y + 100);
ctx.lineTo(x + 60, y + 110);

ctx.closePath();
ctx.lineWidth = 0.3;
ctx.strokeStyle = 'black';
ctx.stroke();

// drawing for window1
ctx.beginPath();
ctx.rect(x + 20, y + 40, 20, 20);
ctx.closePath();
// apply styling
ctx.fillStyle = "#A1E3FC";
ctx.fill();

// drawing for window2
ctx.beginPath();
ctx.rect(x + 60, y + 40, 20, 20);
ctx.closePath();
// apply styling
ctx.fillStyle = '#A1E3FC';
ctx.fill();

// drawing for window lines
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

// drawing for door
ctx.beginPath();
ctx.rect(x + 40, y + 80, 20, 30);
ctx.closePath();
// apply styling
ctx.fillStyle = '#944A00';
ctx.fill();

// drawing for doorknob
ctx.beginPath();
ctx.arc(x + 55, y + 100, 2, 0, 2*Math.PI);
// apply styling
ctx.fillStyle = 'black';
ctx.fill();

// drawing for roof
ctx.beginPath();
ctx.moveTo(x,y + 20);
ctx.lineTo(x + 90,y + 20);
ctx.lineTo(x + 50,y - 10);
ctx.lineTo(x, y + 20);
ctx.moveTo(x + 50, y - 10);
ctx.lineTo(x - 50, y - 50);
ctx.lineTo(x - 100, y - 30);
ctx.lineTo(x, y + 20);
ctx.closePath();
// apply styling
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'white';
ctx.stroke();

// drawing for chimney
ctx.beginPath();
ctx.rect(x - 50, y - 50, 10, 30);
ctx.rect(x - 55, y - 60, 20, 10)
ctx.closePath();
grd.addColorStop(0, 'brown');
grd.addColorStop(1, 'black');
// apply styling
ctx.fillStyle = grd;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.restore();
}

//function for smoke
function drawSmoke(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.save();
// translate context
ctx.translate(canvas.width / 2 - 280, canvas.height / 2 - 150);
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
ctx.restore();
}

//function for smoke2
function drawSmoke2(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.save();
// translate context
ctx.translate(canvas.width / 2 - 280, canvas.height / 2 - 150);
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
ctx.restore();
}

//function for smoke3
function drawSmoke3(){
var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 180);
ctx.save();
// translate context
ctx.translate(canvas.width / 2 - 280, canvas.height / 2 - 150);
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
ctx.restore();
}

/*
function smoke() {
  var elem = document.getElementById("drawSmoke");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
}
*/
