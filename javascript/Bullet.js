function Bullet(context, ship) {
   this.context = context;
   this.ship = ship;
   
   // Posicionar o tiro no bico da ship
   this.width = 3;
   this.height = 10;   
   this.x = ship.x + 18;  // 36 / 2
   this.y = ship.y;
   this.speed = 10;   
   this.color = 'yellow';
}

Bullet.prototype = {
   update: function() {
      this.y -= this.speed;
   },
   draw: function() {
      var ctx = this.context;
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.restore();
   }
}
