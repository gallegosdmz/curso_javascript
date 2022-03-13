let free = false;

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
}



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

tomarAsitencia();