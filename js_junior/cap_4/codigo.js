//Calculadora

class Calculadora {
    constructor() {

    }

    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir(num1, num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);
    }

    potenciar(num, exp) {
        return num**exp;
    }

    cuadrada(num) {
        return Math.sqrt(num);   
    }

    cubica(num) {
        return Math.cbrt(num);
    }
}

function imprimir() {
    const calculadora = new Calculadora();

    alert("Que operación deseas realizar?: ");
    let operacion = prompt("1.- Suma \n 2.- Resta \n 3.- División \n 4.- Multiplicación \n 5.- Potenciación \n 6.- Raiz Cuadrada \n 7.- Raíz Cubica");

    if (operacion == 1) {
        let numero1 = prompt("Ingrese el primer número para SUMAR: ");
        let numero2 = prompt("Ingrese el segundo número para SUMAR: ");

        resultado = calculadora.sumar(numero1, numero2);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 2) {
        let numero1 = prompt("Ingrese el primer número para RESTAR: ");
        let numero2 = prompt("Ingrese el segundo número para RESTAR: ");

        resultado = calculadora.restar(numero1, numero2);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 3) {
        let numero1 = prompt("Ingrese el primer número para DIVIDIR: ");
        let numero2 = prompt("Ingrese el segundo número para DIVIDR: ");

        resultado = calculadora.dividir(numero1, numero2);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 4) {
        let numero1 = prompt("Ingrese el primer número para MULTIPLICAR: ");
        let numero2 = prompt("Ingrese el segundo número para MULTIPLICAR: ");

        resultado = calculadora.multiplicar(numero1, numero2);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 5) {
        let numero1 = prompt("Ingrese el número a POTENCIAR: ");
        let numero2 = prompt("Ingrese el exponente: ");

        resultado = calculadora.potenciar(numero1, numero2);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 6) {
        let numero1 = prompt("Ingrese el número para sacar RAIZ CUADRADA: ");

        resultado = calculadora.cuadrada(numero1);
        alert("RESULTADO: " + resultado);
    }

    if (operacion == 7) {
        let numero1 = prompt("Ingrese el número para sacar RAIZ CUBICA: ");

        resultado = calculadora.cubica(numero1);
        alert("RESULTADO: " + resultado);
    }
}



//Funcion para maestros y alumnos
const obtenerInformacion = (materia) => {
    materias = {
        fisica: ['Perez', 'pedro', 'pepito', 'cofla', 'maria'],
        programacion: ['Dalto', 'pedro', 'juan', 'pepito'],
        logica: ['Hernanez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
        quimica: ['Rodriguez', 'pedro', 'juan', 'pepito', 'cofla', 'maria']
    };

    if (materias[materia] !== undefined) {
        return [materias[materia], materia, materias];
    }else{
        return materias;
    }
}


const mostrarInformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion != false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];

        alumnos.shift();

        document.write(`El profesor de ${informacion[1]} es: ${profesor} y los alumnos son: ${alumnos} <br>`);
    }
}

const cantidadClases = (alumno) => {

    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }

    return `${alumno} están en ${cantidadTotal} clases
    Está cursando las clases: ${clasesPresentes} <br> 
    `;
} 

/* mostrarInformacion('fisica');
mostrarInformacion('programacion');
mostrarInformacion('logica');
mostrarInformacion('quimica');

document.write(cantidadClases("cofla")); */


let materias = {
    fisica: ['Perez', 'pedro', 'pepito', 'cofla', 'maria'],
    programacion: ['Dalto', 'pedro', 'juan', 'pepito'],
    logica: ['Hernanez', 'pedro', 'juan', 'pepito', 'cofla', 'maria'],
    quimica: ['Rodriguez', 'pedro', 'juan', 'pepito', 'cofla', 'maria']
};

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    if (personas.length >= 21) {
        document.write(`Lo siento ${alumno}, las clases de ${materia} ya están llenas <br>`);
    }else{
        personas.push(alumno);
        if (materia == 'fisica') {
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            };
        }
        else if (materia == 'programacion') {
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            };
        }
        else if (materia == 'logica') {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            };
        }
        else if (materia == 'quimica') {
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            };
        }

        document.write(`Felicidades ${alumno} te has inscrito a ${materia} correctamente. <br>`);
    }
}

document.write(materias['fisica'] + "<br>");

inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');
inscribir('pedrito', 'fisica');

document.write("<br>" + materias['fisica']);