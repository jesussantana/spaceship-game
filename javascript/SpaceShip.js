function SpaceShip (context, keyboard, spaceShipImage, animation) {
	this.context = context;
	this.keyboard = keyboard;
	this.animation = animation;
	this.speedX = 3;
	this.speedY = 3;
	this.width = 40;
	this.height = 45;
	this.x = (this.context.canvas.width / 2) - (this.width / 2);
	this.y = (this.context.canvas.height) - this.height;
	this.spaceShipImage = spaceShipImage;
	this.spritesheet = new Spritesheet(this.context, this.spaceShipImage, 3, 3);
}

SpaceShip.prototype = {
	
	update : function () {
		
		if( this.keyboard.isPressed(KEY_LEFT) && this.x > 0 ){
			this.x -= this.speedX;
			console.log(this.x);
		}else if( this.keyboard.isPressed(KEY_RIGHT) && this.x < this.context.canvas.width - this.width ){
			this.x += this.speedX;
		}

		if( this.keyboard.isPressed(KEY_UP) && this.y > 0 ){
			this.y -= this.speedY;		
		}else if( this.keyboard.isPressed(KEY_DOWN) && this.y < this.context.canvas.height - this.height ){
			this.y += this.speedY;
		}
	},

	draw : function () {
		if(this.keyboard.isPressed(KEY_LEFT)){
			this.spritesheet.line = 1;
		}else if(this.keyboard.isPressed(KEY_RIGHT)){
			this.spritesheet.line = 2;
		}else{
			this.spritesheet.line = 0;
		}

		
		this.spritesheet.draw(this.x, this.y);
		this.spritesheet.nextFrame();

	},

	shoot : function () {
		var bullet = new Bullet(this.context, this);
      	this.animation.newSprite(bullet);
	}

}