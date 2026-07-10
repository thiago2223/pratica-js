//Use o laço for para imprimir na tela a tabuada de um número digitado pelo usuário (de 1 a 10).
let num = 5;
if (num < 1 || num > 10 || isNaN(num) === true) {
    console.log('A let num precisa ser um numero, e ser entre 1 e 10');
} else {
    for (let multp = 1; multp <= 10; multp++) {
        num * multp;
        console.log(`${num} x ${multp} = ${num * multp}`);
    };
};
// Versão com html ----->
function Ok() {
    let inputTxt = document.querySelector('#nTxt').value;
    if (isNaN(inputTxt) === true || inputTxt > 10 || inputTxt < 1) {
        alert('Digite um numero entre 1 e 10!!');
    } else {
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            inputTxt * multiplicador;
            console.log(`${inputTxt} x ${multiplicador} = ${inputTxt * multiplicador}.`);
        };
    };
};