//Crie uma função que aceita dois parâmetros (preco, desconto) e calcula o valor final. Entenda que parâmetros são apenas "gavetas vazias" esperando argumentos reais.
function calcularValorFinal(preço, desconto) {
    let valorFinal = preço / (100 / desconto);
    return valorFinal;
}
console.log(calcularValorFinal(10.0, 20));