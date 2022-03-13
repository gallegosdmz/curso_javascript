/* class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }

    verInfo() {
        document.write(this.info);
    }

}

class perro extends animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);

        this.raza = null;
    }

    set modificarRaza(newName) {
        this.raza = newName;
    }

    get getRaza() {
        return this.raza;
    }
}

const perroo = new perro('perro', '5', 'rojo', 'schnauzer');

perroo.modificarRaza = "Pedro";
document.write(perroo.raza); */


/* class Celular {
    constructor(color, peso, resolucion, camara, memoria) {
        this.color = color;
        this.peso = peso;
        this.resolucion = resolucion;
        this.camara = camara;
        this.memoria = memoria;
        this.encendido = false;
    }

    presionarBtnEncendido() {
        if (this.encendido == false) {
            alert("Celular encendido");
            this.encendido = true;
        }else{
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando el celular");
        }else[
            alert("No se puede reiniciar porque el celular está apagado.")
        ]
    }

    tomarFoto() {
        alert(`Foto tomada en una resolución de: ${this.camara}`);
    }

    grabar() {
        alert(`Grabando video en una resolución de: ${this.camara}`);
    }

    mobileInfo() {
        return `
            Color: ${this.color}</br>
            Peso: ${this.peso}</br>
            Tamaño: ${this.resolucion}</br>
            Resolución de Camara: ${this.camara}</br>
            Resolución de Video: ${this.camara}</br>
            Memoria Ram: ${this.memoria}</br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color, peso, resolucion, camara, memoria, camaraex) {
        super(color, peso, resolucion, camara, memoria);
        this.camaraex = camaraex;        
    }

    grabarVideoLento() {
        alert("Estás grabando en camara lenta");
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial");
    }

    infoAltaGama() {
        return this.mobileInfo() + `Resolución de camara extra ${this.camara}`;
    }
}

celular1 = new CelularAltaGama("rojo", "150g", "5", "4K", "2GB", "Fullhd");
celular2 = new CelularAltaGama("negro", "150g", "5", "4K", "2GB", "malhd");

document.write(`

    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br>

`); */

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("Aplicación encendida");
        }
    }

    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("Aplicación apagada");
        }
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("Aplicación INSTALADA correctamente")
        }
    }

    desinstalar() {
        if (this.instalada == true) {
            this.instada = false;
            alert("Aplicación DESINSTALADA correctamente")
        }
    }

    appInfo() {
        return `
            Descargas ${this.descargas}<br>
            Puntuacion ${this.puntuacion}<br>
            Peso ${this.peso}<br>
        `
    }
}


app1 = new App("16.000", "5 estrellas", "900MB");
app2 = new App("10.000", "2 estrellas", "100MB");
app3 = new App("2.000", "5 estrellas", "200MB");
app4 = new App("4.000", "3 estrellas", "100MB");
app5 = new App("8.000", "4 estrellas", "300MB");
app6 = new App("20.000", "5 estrellas", "400MB");
app7 = new App("6.000", "2 estrellas", "500MB");

app1.instalar();
app1.abrir();
app1.cerrar();
app1.desinstalar();

document.write(`
    ${app1.appInfo()}<br><br>
    ${app2.appInfo()}<br><br>
    ${app3.appInfo()}<br><br>
    ${app4.appInfo()}<br><br>
    ${app5.appInfo()}<br><br>
    ${app6.appInfo()}<br><br>
    ${app7.appInfo()}<br><br>
`);