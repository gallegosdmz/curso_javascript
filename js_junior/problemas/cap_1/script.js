class Clientes {
    constructor(name, pres) {
        this.name = name;
        this.pres = pres;
    }

    verInfo() {
        return `
            Nombre: ${this.name}<br>
            Dinero: ${this.pres} USD<br>
        `
    }

    compararHelado() {
        let exchange = 0;

        if (this.pres >= 0.6 && this.pres < 1) {
            exchange = this.pres - 0.6;

            return (`${this.name}: Helado de Agua <br>
            Cambio: ${exchange}
            `);
        }

        if (this.pres >= 1 && this.pres < 1.6) {
            exchange = this.pres - 1;

            return (`${this.name}: Helado de Agua <br>
            Cambio: ${exchange}
            `);
        }

        if (this.pres >= 1.6 && this.pres < 1.7) {
            exchange = this.pres - 1.6;

            return (`${this.name}: Helado de Heladix <br>
            Cambio: ${exchange}
            `);
        }

        if (this.pres >= 1.7 && this.pres < 1.8) {
            exchange = this.pres - 1.7;

            return (`${this.name}: Helado de Heladovich <br>
            Cambio: ${exchange}
            `);
        }

        if (this.pres >= 1.8 && this.pres < 2.9) {
            exchange = this.pres - 1.8;

            return (`${this.name}: Helado de Helardo<br>
            Cambio: ${exchange}
            `);
        }

        if (this.pres >= 2.9) {
            exchange = this.pres - 2.9;

            return (`${this.name}: Helado de Confites o Pote de 1/4 KG <br>
            Cambio: ${exchange}
            `);
        }else{
            return (`${this.name}: No te alcanza para ningun helado`);
        }
    }
}

cli1 = new Clientes('Roberto', '1.5');
cli2 = new Clientes('Pedro', '1.7');
cli3 = new Clientes('Cofla', '3');

document.write(`

    ${cli1.compararHelado()}<br>
    ${cli2.compararHelado()}<br>
    ${cli3.compararHelado()}<br>

`);