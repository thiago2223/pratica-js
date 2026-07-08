//Peça um número e use o operador % 2 para descobrir se o resto é 0 (par) ou 1 (ímpar).
let msg = prompt('Digite um numero para sabermos se ele é par ou não');
let num = Number(msg);
if (num % 2 === 0) {
    console.log('par');
} else {
    console.log('Impar');
};
