//Peça dois números usando prompt(). Converta-os explicitamente usando Number() antes de somá-los, evitando que "10" + "5" vire "105".
let msg1 = prompt('Digite um numero');
let msg2 = prompt('Outro');
let n1 = Number(msg1);
let n2 = Number(msg2);
let soma = n1 + n2;
console.log(soma);