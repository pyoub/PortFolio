var canvas = document.getElementById('can');
var fullpage = document.getElementById('fullpage');
var raf;
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight*3.5 ;
var circles=[];
var ctx = canvas.getContext("2d");

var mouseX;
var mouseY;
canvas.onmousemove = function(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;

}

function ball () {
	 this.r  = (Math.random() * 7)+2,
	 this.x = (Math.random() * innerWidth)+this.r,
	 this.y = (Math.random() * -innerHeight*3.5)+this.r,
	 this.vx = (Math.random() * Math.cos(this.r)/6) - (Math.random()* Math.cos(this.r)/6),
	 this.vy = (Math.random()*2.2)+2;
	 this.distanceX = mouseX-this.x;
	 this.distanceY = mouseY-this.y;
	 var tx=1;
	 var ty = 1;
	 var maxrandom =Math.floor((Math.random()*30));
	 
	this.draw = function (){
	ctx.save();
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
	ctx.fillStyle = "#ffffff";
	ctx.shadowColor = "#ffffff";
	ctx.shadowBlur = 20;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	ctx.fill();
	ctx.restore();
	};
	var x = 0;
	
	this.update = function(){
		this.distanceX = mouseX-this.x;
	 	this.distanceY = mouseY-this.y;
		
		if((Math.abs(this.distanceX)<this.r*6 && Math.abs(this.distanceY)<this.r*6)){
			if(this.distanceX<0){
				this.x -=  0.4 ;
			}
			else{
				this.x += 0.4;
			}
			//ty=1.5;
		}
		else //if((Math.abs(this.distanceX)>this.r*4 && Math.abs(this.distanceY)>this.r*4))
		{
			
			if(x>=maxrandom && this.vx>0){
			this.vx =  -this.vx;
			x=0;
			}
			else if(x <= -1*maxrandom &&  this.vx<0){
			this.vx =  -this.vx;
			x=0;}

			this.x +=  this.vx ;
			
			ty=1;
			x += this.vx;
		}

		
		
		this.y += this.vy*0.5;
		if(this.y>=(innerHeight*3.5)+this.r){
			this.y = 0;
			this.r  =(Math.random() * 7)+2;
			this.x = Math.random() * innerWidth+this.r;

		}

	 }
};


function animate(){
	circles = [];

	for (var i =0; i <= 150; i++) {

	 circles[i] = new ball();
} }
animate();
function animation(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	// ctx.beginPath();
	// ctx.rect(0,0,innerWidth,innerHeight);
	// ctx.fillStyle = "#001064";
	// ctx.fill();
	for (var i =0; i <= 150; i++) {
	 	circles[i].draw();
	 	circles[i].update();
	 	 }
  window.requestAnimationFrame(animation);
}

function initialize() {
           // Register an event listener to call the resizeCanvas() function 
           // each time the window is resized.

           window.addEventListener('resize', animation, false);
           // Draw canvas border for the first time.
                      
           animation();
        }
initialize();


// function move() {
//     var elem = document.getElementById("myBar"); 
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++; 
//             elem.style.width = width + '%'; 
//         }
//     }
// }

// var t =  document.getElementById('node');
// t.onmousemove = function(e) {
// 	move();

// }
