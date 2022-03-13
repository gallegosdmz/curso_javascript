var objetos = [];
var top1 = [];
var top2 = [];
var top3 = [];
var top4 = [];
var contador = [0,1,2,3];

//Capturar datos en arreglo
for (let i = 0; i < 4; i++) {
    objetos[i] = prompt('Ingrese el objeto número: ' + (i + 1));
}

for (let i = 0; i < 1; i++) {
    var pregunta = prompt('¿Cual prefieres? 1.- ' + objetos[0] + ' o ' + ' 2.- ' + objetos[1]);

    if (pregunta == 1) {
        top1[i] = objetos[0];
    }else if (pregunta == 2) {
        top1[i] = objetos[1];
    }

    var pregunta = prompt('¿Cual prefieres? 1.- ' + objetos[2] + ' o ' + ' 2.- ' + objetos[3]);

    if (pregunta == 1) {
        top2[i] = objetos[2];
        top3[i] = objetos[3];
    } else if (pregunta == 2) {
        top2[i] = objetos[3];
        top3[i] = objetos[2];
    }

    alert('Top 1: ' + top1 + ' Top 2: ' + top2);
}
