let concesionaria = {
    autos: require("./autos"),
    buscarAuto: function buscarAuto (patente) {
        let autos = this.autos;
        for (let i = 0; i < autos.length; i++){
            if (autos[i].patente == patente) {
                return autos[i];
            }
       }
    return;
    },
    venderAuto: function venderAuto (patente) {
        let autoBuscado = this.buscarAuto(patente);
        autoBuscado.vendido = true;
    },
    autosParaLaVenta: function autosParaLaVenta () {
        let autos = this.autos;
        let autosFiltrados = autos.filter(autos => autos.vendido == false);
        return autosFiltrados;
    },
    autosNuevos: function autos0KM () {
        let autosSinFiltrarKM = this.autosParaLaVenta();
        let autosFiltradosPorKM = autosSinFiltrarKM.filter(autosSinFiltrarKM => autosSinFiltrarKM.km < 100);
        return autosFiltradosPorKM;
    },
    listaDeVentas: function listaDeVentas () {
        let autos = this.autos;
        let autosVendidos = autos.filter(autos => autos.vendido == true);
        let arrayResultado = [];
        for (let i = 0; i < autosVendidos.length; i++){
            arrayResultado.push(autosVendidos[i].precio);
        }
    return arrayResultado;
    },
    totalDeVentas: function totalDeVentas () {
        if (this.listaDeVentas().length != 0) {
            return this.listaDeVentas().reduce((acumulador, elemento) => acumulador + elemento);
        }else{
            return 0;
        }
    },
    puedeComprar: function puedeComprar (auto, persona) {
        if ((auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal){
            return true;
        }else{
            return false;
        }
    },
    autosQuePuedeComprar: function autosQuePuedeComprar (persona) {
        let autosParaLaVenta = this.autosParaLaVenta();
        let arrayResultado = [];
        for (let i = 0; i < autosParaLaVenta.length; i++){
            let valorCuotaActual = autosParaLaVenta[i].precio/autosParaLaVenta[i].cuotas;
            if (autosParaLaVenta[i].precio <= persona.capacidadDePagoTotal && valorCuotaActual <= persona.capacidadDePagoEnCuotas){
                arrayResultado.push(autosParaLaVenta[i]);
            }
        }
    return arrayResultado;
    }
}

let auto2 = {
    precio: 150000,
    cuotas: 12,
}
let persona2 = {
    capacidadDePagoTotal: 100000000,
    capacidadDePagoEnCuotas: 100000,
}

console.log(concesionaria.puedeComprar(auto2, persona2));