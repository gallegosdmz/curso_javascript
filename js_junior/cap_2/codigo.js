/* let free = false;

const validarCliente = (time) => {
	let edad = prompt('Cual es tu edad?');

	if (edad >= 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert('No pagas cover, entra a la fiesta y mamate como becerro');
			free = true;
		}else{
			alert('son las $Puedes pasar, pero tienes que pagar el cover');
		}
	}else{
		alert('No puedes pasar a la fiesta porque eres menor de edad');
	}
} */


let n = prompt('Ingrese la cantidad de alumno: ');

let alumnosTotales = [];

for (let i = 0; i < n; i++) {
	alumnosTotales[i] = [prompt('Ingrese el nombre del alumno: ' + (i+1)), 0];
}

const tomarAsitencia = (nombre, p) => {
	let presencia = prompt(nombre);

	if (presencia == 'p' || presencia == 'P') {
		alumnosTotales[p][1]++;
	}
}

for (let i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
		tomarAsitencia(alumnosTotales[alumno][0], alumno);
	}
}

for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
	---------Presentes: ${alumnosTotales[alumno][1]}<br>
	---------Ausencias: ${30 - alumnosTotales[alumno][1]}`;

	if (30 - alumnosTotales[alumno][1] > 18) {
		resultado+= 'Reprobado por inasistencias'
	}else{
		resultado+= '<br>'
	}

	document.write(resultado);
}

/* const calculadora = (num1, num2) => {

	do {
		var indicacion = parseInt(prompt('1.- Suma \n  2.- Resta \n  3.- Multiplicacion \n  4.- Division \n  5.- Salir'));

		switch (indicacion) {
			case 1:
				num1 = parseInt(prompt('Ingresa el numero 1: '));
				num2 = parseInt(prompt('Ingresa el numero 2: '));

				let suma = num1 + num2;
				alert(suma);
				break;
			case 2:
				num1 = parseInt(prompt('Ingresa el numero 1: '));
				num2 = parseInt(prompt('Ingresa el numero 2: '));

				let resta = num1 - num2;
				alert(resta);
				break;
			case 3:
				num1 = parseInt(prompt('Ingresa el numero 1: '));
				num2 = parseInt(prompt('Ingresa el numero 2: '));

				let mult = num1 * num2;
				alert(mult);
				break;
			case 4:
				num1 = parseInt(prompt('Ingresa el numero 1: '));
				num2 = parseInt(prompt('Ingresa el numero 2: '));
				let div = num1 / num2;
				alert(div);
				break;
			case 5:
				document.write('Operación realizada con exito')
				break;
		}
	} while (indicacion < 5);
}

calculadora(); */


