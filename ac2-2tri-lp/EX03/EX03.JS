// WHILE
function checarWhile() {
    var num = parseInt(document.getElementById("num").value);
    var primo = true;
    var i = 2;

    while (i < num) {
        if (num % i === 0) {
            primo = false;
        }
        i++;
    }

    if (primo && num > 1) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}
// DO WHILE
function checarDo() {
    var num = parseInt(document.getElementById("num").value);
    var primo = true;
    var i = 2;

    if (num > 1) {
        do {
            if (num % i === 0) {
                primo = false;
            }
            i++;
        } while (i < num);
    } else {
        primo = false;
    }

    if (primo) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}

// FOR
function checarFor() {
    var num = parseInt(document.getElementById("num").value);
    var primo = true;

    if (num <= 1) {
        primo = false;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                primo = false;
               
            }
        }
    }

    if (primo) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}
