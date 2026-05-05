function calcularLuna() {
    let fechaInput = document.getElementById('fecha').value;
    if (fechaInput === "") {
        alert("Por favor selecciona una fecha");
        return;
    }

    // Calcular fase usando un calculo matemático inventado
    let fase = calcularFaseLunarMatematica(fechaInput);
    let numeroFase = obtenerNumeroFase(fase);

    document.getElementById('resultado').innerText = fase;
    
    // Mostrar el dato curioso
    let datoCurioso = obtenerDatoCurioso(numeroFase);
    document.getElementById('dato-curioso').innerText = datoCurioso;
}

function calcularFaseLunarMatematica(fecha) {
    let fechaSeleccionada = new Date(fecha);
    
    // Obtener día, mes y año
    let dia = fechaSeleccionada.getDate();
    let mes = fechaSeleccionada.getMonth() + 1; // +1 porque enero es 0
    let año = fechaSeleccionada.getFullYear();
    
    // cálculo matemático inventado
    let calculo = (dia * 3) + (mes * 7) + (año * 2);
    
    //módulo 8 para obtener número entre 0 y 7
    let numeroFase = calculo % 8;
    
    // posicion
    let posicionCiclo = numeroFase / 8;
    
    return determinarFase(posicionCiclo);
}

function determinarFase(posicion) {
    if (posicion < 0.125) {
        return "🌑 Luna Nueva";
    } else if (posicion < 0.25) {
        return "🌒 Luna Creciente";
    } else if (posicion < 0.375) {
        return "🌓 Cuarto Creciente";
    } else if (posicion < 0.5) {
        return "🌔 Gibosa Creciente";
    } else if (posicion < 0.625) {
        return "🌕 Luna Llena";
    } else if (posicion < 0.75) {
        return "🌖 Gibosa Menguante";
    } else if (posicion < 0.875) {
        return "🌗 Cuarto Menguante";
    } else {
        return "🌘 Luna Menguante";
    }
}

function obtenerNumeroFase(fase) {
    if (fase.includes("Luna Nueva")) return 0;
    if (fase.includes("Luna Creciente")) return 1;
    if (fase.includes("Cuarto Creciente")) return 2;
    if (fase.includes("Gibosa Creciente")) return 3;
    if (fase.includes("Luna Llena")) return 4;
    if (fase.includes("Gibosa Menguante")) return 5;
    if (fase.includes("Cuarto Menguante")) return 6;
    if (fase.includes("Luna Menguante")) return 7;
    return 0;
}

function obtenerDatoCurioso(numeroFase) {
    let datoCurioso = "";
    
    if (numeroFase === 0) {
        datoCurioso = "En la Luna Nueva, la Luna no es visible desde la Tierra.";
    } else if (numeroFase === 1) {
        datoCurioso = "La Luna Creciente aparece como una pequeña sonrisa en el cielo.";
    } else if (numeroFase === 2) {
        datoCurioso = "En Cuarto Creciente, exactamente la mitad de la Luna está iluminada.";
    } else if (numeroFase === 3) {
        datoCurioso = "La Gibosa Creciente es cuando la Luna está casi llena.";
    } else if (numeroFase === 4) {
        datoCurioso = "La Luna Llena puede parecer más grande cerca del horizonte.";
    } else if (numeroFase === 5) {
        datoCurioso = "En Gibosa Menguante, la Luna empieza a 'encogerse'.";
    } else if (numeroFase === 6) {
        datoCurioso = "El Cuarto Menguante sale a medianoche.";
    } else if (numeroFase === 7) {
        datoCurioso = "La Luna Menguante es la última fase antes de la Luna Nueva.";
    }
    
    return datoCurioso;
}
