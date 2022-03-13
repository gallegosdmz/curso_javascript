 class Celular {
     constructor(color, weight, rscreen, rcam, ram) {
         this.color = color;
         this.weight = weight;
         this.rscreen = rscreen;
         this.rcam = rcam;
         this.ram = ram;
         this.encendido = false;
     }

     infoCelular() {
         return `

            Color: ${this.color}<br>
            Peso: ${this.weight}<br>
            Pantalla: ${this.rscreen}<br>
            Camara: ${this.rcam}<br>
            Ram: ${this.ram}<br>

         `
     }

     prender() {
        if (this.encendido == false) {
            alert('Celular Encendido.');

            this.encendido = true;
        }else{
            alert('El celular ya estaba encendido.');
        }
     }

     reiniciar() {
         if (this.encendido == true) {
            alert('Reiniciando Celular.');
         }else{
             alert('No se puede reiniciar porque el celular está apagado.');
         }
     }

     apagar() {
         if (this.encendido == true) {
            alert('Apagando Celular.');

            this.encendido = false;
         }else{
             alert('El celular ya estaba apagado.');
         }
     }

     tomarFoto() {
         if (this.encendido == true) {
            alert('Tomando Foto.');
         }else{
             alert('No se puede tomar fotos porque el celular está apagado.');
         }
     }

     tomarVideo() {
         if (this.encendido == true) {
            alert('Tomando Vídeo.');
         }else{
             alert('No se puede tomar vídeo porque el celular está apagado.');
         }
     }
 }

celular1 = new Celular('Morado', '55', '5 px', '10 px', '8 GB');
celular2 = new Celular('Rojo', '33', '7 px', '11 px', '4 GB');
celular3 = new Celular('Azuk', '22', '9 px', '12 px', '9 GB');

celular1.prender();
celular1.reiniciar();
celular1.tomarFoto();
celular1.tomarVideo();
celular1.apagar();
celular1.prender();

document.write(`

 ${celular1.infoCelular()}<br>
 ${celular2.infoCelular()}<br>
 ${celular3.infoCelular()}<br>

`);