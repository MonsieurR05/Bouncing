"use strict";

var imgElement;
var intervalSpeed = 5;

var clientWidth = 0
var clientHeight = 0

let xPosition = 10
let yPosition = 10
let xSpeed = 3
let ySpeed = 3

function Start(){
	imgElement = document.getElementById("img0")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update(){
	console.log("This function is executed every " + intervalSpeed + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement.style.left = imgElement.offsetLeft + xSpeed + "px";
	imgElement.style.top = imgElement.offsetTop + ySpeed + "px";
}

setInterval(() => {
	if(xPosition + imgElement.clientWidth >= window.innerWidth || xPosition <= 0){
		xSpeed = -xSpeed
	}
	if(yPosition + imgElement.clientHeight >= window.innerHeight || yPosition <= 0){
		ySpeed = -ySpeed
	}
yPosition += ySpeed
xPosition += xSpeed
Update()
})


var imgElement2;
var intervalSpeed2 = 5;


let xPosition2 = 10
let yPosition2 = 10
let xSpeed2 = 4
let ySpeed2 = 6

function Start2(){
	imgElement2 = document.getElementById("img2")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update2(){
	console.log("This function is executed every " + intervalSpeed2 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement2.style.left = imgElement2.offsetLeft + xSpeed2 + "px";
	imgElement2.style.top = imgElement2.offsetTop + ySpeed2 + "px";
}

setInterval(() => {
	if(xPosition2 + imgElement2.clientWidth >= window.innerWidth || xPosition2 <= 0){
		xSpeed2 = -xSpeed2
	}
	if(yPosition2 + imgElement2.clientHeight >= window.innerHeight || yPosition2 <= 0){
		ySpeed2 = -ySpeed2
	}
xPosition2 += xSpeed2
yPosition2 += ySpeed2
Update2()
})


var imgElement3;
var intervalSpeed3 = 5;


let xPosition3 = 15
let yPosition3 = 15
let xSpeed3 = 2
let ySpeed3 = 7

function Start3(){
	imgElement3 = document.getElementById("img3")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update3(){
	console.log("This function is executed every " + intervalSpeed3 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement3.style.left = imgElement3.offsetLeft + xSpeed3 + "px";
	imgElement3.style.top = imgElement3.offsetTop + ySpeed3 + "px";
}

setInterval(() => {
	if(xPosition3 + imgElement3.clientWidth >= window.innerWidth || xPosition3 <= 0){
		xSpeed3 = -xSpeed3
	}
	if(yPosition3 + imgElement3.clientHeight >= window.innerHeight || yPosition3 <= 0){
		ySpeed3 = -ySpeed3
	}
xPosition3 += xSpeed3
yPosition3 += ySpeed3
Update3()
})


var imgElement4;
var intervalSpeed4 = 5;


let xPosition4 = 10
let yPosition4 = 10
let xSpeed4 = -5
let ySpeed4 = 3

function Start4(){
	imgElement4 = document.getElementById("img4")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update4(){
	console.log("This function is executed every " + intervalSpeed4 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement4.style.left = imgElement4.offsetLeft + xSpeed4 + "px";
	imgElement4.style.top = imgElement4.offsetTop + ySpeed4 + "px";
}

setInterval(() => {
	if(xPosition4 + imgElement4.clientWidth >= window.innerWidth || xPosition4 <= 0){
		xSpeed4 = -xSpeed4
	}
	if(yPosition4 + imgElement4.clientHeight >= window.innerHeight || yPosition4 <= 0){
		ySpeed4 = -ySpeed4
	}
xPosition4 += xSpeed4
yPosition4 += ySpeed4
Update4()
})


var imgElement5;
var intervalSpeed5 = 5;


let xPosition5 = 10
let yPosition5 = 10
let xSpeed5 = 1
let ySpeed5 = 4

function Start5(){
	imgElement5 = document.getElementById("img5")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update5(){
	console.log("This function is executed every " + intervalSpeed5 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement5.style.left = imgElement5.offsetLeft + xSpeed5 + "px";
	imgElement5.style.top = imgElement5.offsetTop + ySpeed5 + "px";
}

setInterval(() => {
	if(xPosition5 + imgElement5.clientWidth >= window.innerWidth || xPosition5 <= 0){
		xSpeed5 = -xSpeed5
	}
	if(yPosition5 + imgElement5.clientHeight >= window.innerHeight || yPosition5 <= 0){
		ySpeed5 = -ySpeed5
	}
xPosition5 += xSpeed5
yPosition5 += ySpeed5
Update5()
})


var imgElement6;
var intervalSpeed6 = 5;


let xPosition6 = 10
let yPosition6 = 10
let xSpeed6 = 4
let ySpeed6 = 1

function Start6(){
	imgElement6 = document.getElementById("img6")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update6(){
	console.log("This function is executed every " + intervalSpeed6 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement6.style.left = imgElement6.offsetLeft + xSpeed6 + "px";
	imgElement6.style.top = imgElement6.offsetTop + ySpeed6 + "px";
}

setInterval(() => {
	if(xPosition6 + imgElement6.clientWidth >= window.innerWidth || xPosition6 <= 0){
		xSpeed6 = -xSpeed6
	}
	if(yPosition6 + imgElement6.clientHeight >= window.innerHeight || yPosition6 <= 0){
		ySpeed6 = -ySpeed6
	}
xPosition6 += xSpeed6
yPosition6 += ySpeed6
Update6()
})


var imgElement7;
var intervalSpeed7 = 5;


let xPosition7 = 10
let yPosition7 = 10
let xSpeed7 = 2
let ySpeed7 = 2

function Start7(){
	imgElement7 = document.getElementById("img7")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update7(){
	console.log("This function is executed every " + intervalSpeed7 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement7.style.left = imgElement7.offsetLeft + xSpeed7 + "px";
	imgElement7.style.top = imgElement7.offsetTop + ySpeed7 + "px";
}

setInterval(() => {
	if(xPosition7 + imgElement7.clientWidth >= window.innerWidth || xPosition7 <= 0){
		xSpeed7 = -xSpeed7
	}
	if(yPosition7 + imgElement7.clientHeight >= window.innerHeight || yPosition7 <= 0){
		ySpeed7 = -ySpeed7
	}
xPosition7 += xSpeed7
yPosition7 += ySpeed7
Update7()
})


var imgElement8;
var intervalSpeed8 = 5;


let xPosition8 = 10
let yPosition8 = 10
let xSpeed8 = 4
let ySpeed8 = 5

function Start8(){
	imgElement8 = document.getElementById("img8")
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width)	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);
}

function Update8(){
	console.log("This function is executed every " + intervalSpeed8 + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement8.style.left = imgElement8.offsetLeft + xSpeed8 + "px";
	imgElement8.style.top = imgElement8.offsetTop + ySpeed8 + "px";
}

setInterval(() => {
	if(xPosition8 + imgElement8.clientWidth >= window.innerWidth || xPosition8 <= 0){
		xSpeed8 = -xSpeed8
	}
	if(yPosition8 + imgElement8.clientHeight >= window.innerHeight || yPosition8 <= 0){
		ySpeed8 = -ySpeed8
	}
xPosition8 += xSpeed8
yPosition8 += ySpeed8
Update8()
})