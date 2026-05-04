function calcularLuna() {
    let fechaInput = document.getElementById('fecha').value;
    if (fechaInput === "") {
        alert("Por favor selecciona una fecha");
        return;
    }

    // Calcular la fase lunar real
    let fase = calcularFaseLunarReal(fechaInput);
    let numeroFase = obtenerNumeroFase(fase);

    document.getElementById('resultado').innerText = fase;
    
    // Mostrar el dato curioso
    let datoCurioso = obtenerDatoCurioso(numeroFase);
    document.getElementById('dato-curioso').innerText = datoCurioso;
}

function calcularFaseLunarReal(fecha) {
    // Fecha de referencia: Luna Nueva del 6 enero 2000
    let fechaReferencia = new Date('2000-01-06');
    let fechaSeleccionada = new Date(fecha);
    
    // Calcular días transcurridos
    let diferenciaDias = (fechaSeleccionada - fechaReferencia) / (1000 * 60 * 60 * 24);
    
    // Ciclo lunar: 29.53059 días
    let cicleLunar = 29.53059;
    
    // Calcular posición en el ciclo (0 a 1)
    let posicionCiclo = (diferenciaDias % cicleLunar) / cicleLunar;
    
    // Si es negativo, ajustar
    if (posicionCiclo < 0) {
        posicionCiclo = posicionCiclo + 1;
    }
    
    return determinarFase(posicionCiclo);
}

function determinarFase(posicion) {
    if (posicion < 0.0625 || posicion >= 0.9375) {
        return "🌑 Luna Nueva";
    } else if (posicion < 0.1875) {
        return "🌒 Luna Creciente";
    } else if (posicion < 0.3125) {
        return "🌓 Cuarto Creciente";
    } else if (posicion < 0.4375) {
        return "🌔 Gibosa Creciente";
    } else if (posicion < 0.5625) {
        return "🌕 Luna Llena";
    } else if (posicion < 0.6875) {
        return "🌖 Gibosa Menguante";
    } else if (posicion < 0.8125) {
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

// Tu función obtenerDatoCurioso se mantiene igual
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
