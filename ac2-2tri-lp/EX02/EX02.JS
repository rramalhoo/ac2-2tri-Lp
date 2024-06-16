// WHILE
function checarWhile() {
    var num = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var penultimo = 0;
    var ultimo = 1;
    var resultado = "0";

    if (num >= 2) {
        resultado += ", 1";
    }

    var count = 3;
    while (count <= num) {
        var numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
        count++;
    }

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}

// DO WHILE
function checarDo() {
    var num = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var penultimo = 0;
    var ultimo = 1;
    var resultado = "0";

    if (num >= 1) {
        resultado += ", 1";
    }

    var count = 3;
    do {
        var numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
        count++;
    } while (count <= num);

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}

// FOR
function checarFor() {
    var num = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var penultimo = 0;
    var ultimo = 1;
    var resultado = "0";

    if (num >= 2) {
        resultado += ", 1";
    }

    for (var i = 3; i <= num; i++) {
        var numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
    }

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}
