var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 36;
var KEY_DOWN = 38;

function Keyboard (element) {
	this.element = element;

	//List of pressed keys
	this.pressed = [];

	var keyboard = this;

	element.addEventListener('keydown', function (event){
		keyboard.pressed[event,keyCode] = true;
	});

	element.addEventListener('keyup', function(){
		
	});

}

