let moving1 = document.getElementById('moving1');
let moving2 = document.getElementById('moving2');
let moving3 = document.getElementById('moving3');
let windowWidth, windowHeight;

document.body.onmousemove = function(e) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	console.log(windowWidth, windowHeight);

	translateFromMousePosition(moving1, e.clientX, e.clientY, windowWidth, windowHeight, 5);
	translateFromMousePosition(moving2, e.clientX, e.clientY, windowWidth, windowHeight, 10);
	translateFromMousePosition(moving3, e.clientX, e.clientY, windowWidth, windowHeight, 15);

}

function translateFromMousePosition(domObject, mousePositionX, mousePositionY, windowWidth, windowHeight, ratio) {
	let finalX, finalY;
	let halfScreenX = windowWidth / 2;
	let halfScreenY = windowHeight / 2;

	finalX = (mousePositionX - halfScreenX)/ratio;
	finalY = (mousePositionY - halfScreenY)/ratio;

	domObject.style['transform'] = "translate("+ finalX +"px, "+ finalY +"px)";
}
