if(window.innerWidth<window.innerHeight){document.body.innerHTML="<center><h1 color='red'>This game will not work in mobile device. Open this game in github.</h1></center>";}
document.getElementById('ship').style.top="100px";
document.getElementById('ship').style.left="100px";
function ship_move(x,y) {
	var a = document.getElementById('ship');
	var x_s = parseInt(a.style.top.replace("px",""));
	var y_s = parseInt(a.style.left.replace("px",""));
	a.style.top= String(x_s+x)+"px";
	a.style.left=String(y_s+y)+"px"
}
function ship_getPos() {
	var x = parseInt(document.getElementById('ship').style.left.replace("px",""));
	var y = parseInt(document.getElementById('ship').style.top.replace("px",""));
	return {x,y};
}
function ship_set(x,y) {
	document.getElementById('ship').style.top= String(x)+"px";
	document.getElementById('ship').style.left=String(y)+"px"
}
var x1=ship_getPos().x;
var y1=ship_getPos().y;
window.onkeydown= function(e) {
	console.log(e);
	var spc=document.getElementById('ship').style;
	if(e.key=="w") {
		spc.top=y1 - 10+"px";
		y1=y1-10;
	} else if(e.key == "s") {
		spc.top=y1 + 10+"px";
		y1=y1+10;
	} else if(e.key == "d") {
		spc.left=x1 + 10+"px";
		x1=x1+10;
	} else if(e.key == "a") {
		spc.left=x1 - 10+"px";
		x1=x1-10;
	} else if(e.key == "r") {
		attack();
	} else{
		var n=0;
	}
}
function sttt() {var p=document.createElement("p");p.innerHTML="<a href='https://github.com/abhineetraj1'>Made By Abhineet Raj</a>";p.style="text-align:center;height:5vh;padding:3px;font-size:3vh;background:white;color:black;position:absolute;top:90vh;float:right;";document.body.appendChild(p);}
sttt();
var g_over="<center><h1>Game Over!!</h1><br><h3>You have crossed the border line</h3></center>"
function attack() {
	var a = document.createElement("img");
	a.src="rocket-launch.png";
	a.className="roc";
	a.style.position="absolute";
	a.style.top=ship_getPos().y+"px";
	a.style.left=ship_getPos().x+ document.getElementById('ship').width/2 +"px";
	document.body.appendChild(a);
}

setInterval(check_over,1) 
function check_over(){
	var a = document.getElementById("ship");
	if(ship_getPos().x==0){
		document.write(g_over);
		clearInterval(check_over,1);
		clearInterval(rocket,100);
	}else if(ship_getPos().y==0){
		document.write(g_over);
		clearInterval(check_over,1);
		clearInterval(rocket,100);
	}else if((ship_getPos().y+a.height) > window.innerHeight){
		document.write(g_over);
		clearInterval(check_over,1);
		clearInterval(rocket,100);
	}else if((ship_getPos().x+a.width)>window.innerWidth){
		document.write(g_over);
		clearInterval(check_over,1);
		clearInterval(rocket,100);
	} else{
		var b=0;
	}
}
setInterval(rocket,100);
function rocket() {
	var n=0;
	while(n< document.getElementsByClassName('roc').length) {
		document.getElementsByClassName('roc')[n].style.top= parseInt(document.getElementsByClassName('roc')[n].style.top.replace("px",""))-10 + "px";
		if(parseInt(document.getElementsByClassName('roc')[n].style.top.replace("px",""))<0) {
			document.getElementsByClassName('roc')[n].remove();
		} 
		n=n+1;
	}

}
//  (x,y)       (x_a,y_a)
//  (x_b,y_b)   (x_d,y_d)
//
//
