//Use a função isNaN() para validar se o valor convertido de um input é realmente um número ou se o usuário digitou letras por engano.

function verificar() {
    let numero = document.querySelector('#nTxt').value; 
    let n = Number(numero);
    if (isNaN(numero)) {
        alert('Digite um numero!');
    };
};