var canvas = document.getElementById('can');
var raf;
// canvas.width = window.innerWidth ;
// canvas.height = window.innerHeight ;
var circles=[];
var ctx = canvas.getContext("2d");
var dy = Math.random*4;
var dx = 0;
function ball () {
	 this.r  =(Math.random() * 3),
	 this.x = Math.random() * innerWidth+this.r,
	 this.y = Math.random() * innerHeight+this.r,
	 this.vx = Math.cos(this.r),
	 this.vy = (Math.random()*2)+0.5,
	this.draw = function (){
	ctx.beginPath();
	ctx.arc(this.x,this.y,this.r,0,2*Math.PI,true);
	ctx.closePath();
	ctx.stroke();
	};
	this.update = function(){
		this.x +=  this.vx;
		this.y += this.vy;
		if(this.y>=innerHeight){
			this.y=0;
			this.r  =(Math.random() * 8);
			this.x = Math.random() * innerWidth+this.r;}
	}
};

function init(){
  window.addEventListener('resize', resizeCanvas, false);
	
	resizeCanvas();
}init();
function resizeCanvas() {
	// body...
	ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  for (var i =0; i <= 140; i++) {
	 circles[i] = new ball();
	 circles[i].draw();
	 console.log(circles[i]);
 }

}
/*function animation(){
	ctx.clearRect(0,0, canvas.width, canvas.height);
	for (var i =0; i <= 100; i++) {
	 	circles[i].draw();
	 	circles[i].update();
	 	
			} 
  raf = window.requestAnimationFrame(animation);
}
animation();*/

