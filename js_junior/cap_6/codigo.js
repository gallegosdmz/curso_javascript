/* const contenedor = document.querySelector('.flex-container');

function crearLlave(nombre, modelo, precio) {

    img = "<img class='llave-img' src='llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    
    return [img, nombre, modelo, precio];
}

let frag = document.createDocumentFragment();

for (var i = 0; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRandom}`, precioRandom);

    let div = document.createElement('DIV');
    div.addEventListener('click', ()=>{
        document.querySelector('.key-data').value = modeloRandom;
    });
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

    frag.appendChild(div);
}

contenedor.appendChild(frag); */
    
      let suma = 0;
      let media = 0;

      for (let i = 1; i <= 10; i++) {
        let edad = prompt("Ingresa la edad " + i);

        let numero = parseInt(edad);

        suma = suma + numero;
      }
      
      media = suma / 10;
      console.log(media);