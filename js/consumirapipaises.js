var respuestaPaisesApi;

function poblarDatosPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {
            respuestaPaisesApi = paises;
            // crearListaPaises(paises);
            adicionarDatosTablaPaises(paises);
            agregarElementosSelect(paises);
        });

    function adicionarDatosTablaPaises(paises) {

        var tabla = document.getElementById("tablaPaises")

        for (const pais of paises) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaMoneda = fila.insertCell(2);
            var columnaBanderas = fila.insertCell(3);
            var columnaPoblacion = fila.insertCell(4);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.currencies.symbol;
            var currencies = Object.keys
            columnaBanderas.innerHTML = pais.flags.png;
            columnaPoblacion.innerHTML = pais.population;
        }
    }

    function crearListaPaises(paises) {

        var ul = crearNodo('ul');

        for (const pais of paises) {
            var li = crearNodoTexto('li', pais.name.common);

            adicionarNodoContenedor(ul, li);
        }
        adicionarNodoBody(ul);
    }
}

function agregarElementosSelect(paises) {

    var selectPaises = document.getElementById("selectPaises");

    for (const pais of paises) {
        var Option = crearNodoTexto('option', pais.name.official);
        adicionarNodoContenedor(selectPaises, Option);
    }
}

function mostrarDatosPaisSeleccionado(paisBuscar) {

    var tabla = document.getElementById("tablaPaises")
    tabla.remove();

    for (const pais of respuestaPaisesApi) {
        
        if (paisBuscar == pais.name.official) {
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.region;
        }
    }

}