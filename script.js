function calcularLuna() {
    let fechaInput = document.getElementById('fecha').value;
    
    if (fechaInput === "") {
        alert("Por favor selecciona una fecha");
        return;
    }
    
    // Simulación simple usando números aleatorios basados en la fecha
    let fecha = new Date(fechaInput);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    
    // Cálculo simple basado en día y mes
    let numero = (dia + mes) % 8;
    
    let fase = "";
    if (numero === 0 || numero === 7) {
        fase = "🌑 Luna Nueva";
    } else if (numero === 1) {
        fase = "🌒 Luna Crecientee";
    } else if (numero === 2) {
        fase = "🌓 Cuarto Creciente";
    } else if (numero === 3) {
        fase = "🌔 Gibosa Creciente";
    } else if (numero === 4) {
        fase = "🌕 Luna Llena";
    } else if (numero === 5) {
        fase = "🌖 Gibosa Menguante";
    } else if (numero === 6) {
        fase = "🌗 Cuarto Menguante";
    }
    
    document.getElementById('resultado').innerText = fase;
}



