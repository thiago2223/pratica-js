//Faça uma função matemática que calcula a média de notas. Use a palavra-chave return para enviar o resultado de volta e guarde-o em uma variável fora da função.
function calcularMedia() {
    let notas = [9, 9, 10, 8, 8.5, 10, 10];
    let soma = 0;
    for (let indice in notas) {
        soma += notas[indice];
    };
    let media = soma / notas.length;
    return parseInt(media);
};
let mediaFinal = calcularMedia();
console.log(mediaFinal)
