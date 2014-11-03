function Parallax(context, imagem) {
   this.context = context;
   this.imagem = imagem;
   this.speed = 0;
   this.joinPosition = 0;
}

Parallax.prototype = {
   update: function() {
      // Atualizar a posição de emenda
      this.joinPosition += this.speed;
      
      // Emenda passou da posição
      if (this.joinPosition > this.imagem.height)
         this.joinPosition = 0;
   },
   draw: function() {
      var img = this.imagem;  // Para facilitar a escrita :D
      
      // Primeira cópia
      var y = this.joinPosition - img.height;
      this.context.drawImage(img, 0, y, img.width, img.height);
      
      // Segunda cópia
      y = this.joinPosition;
      this.context.drawImage(img, 0, y, img.width, img.height);     
   }
}

