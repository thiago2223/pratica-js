//Escreva um código onde a condição de parada de um while nunca é alcançada. Identifique onde faltou o incremento (i++) para entender o que trava um navegador.
let i = 2;
while (i > 1) {
    i++;
    console.log(i)
}
// aqui é só trocar o > por <.