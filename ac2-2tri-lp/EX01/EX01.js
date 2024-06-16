//while
function checarWhile() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    contagemDeImpares = 0;


    if (num1 < num2) {
        while (i < num2) {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
            i++;
        }
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    }
    else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}

//do while
function checarDo() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    contagemDeImpares = 0;

    if (num1 < num2) {
        do {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
            i++;
        } while (i < num2);
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    } else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}

//for
function checarFor() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    contagemDePares = 0;
    contagemDeImpares = 0;

    if (num1 < num2) {
        for (i = num1 + 1; i < num2; i++) {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
        }
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    } else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}
