//Em vez de criar let nomeCarro = "Fusca" e let corCarro = "Azul", crie um único objeto chamado carro:
//Altere a cor do seu objeto carro diretamente através de uma atribuição: carro.cor = "Preto";. Imprima o objeto e veja a alteração.
//Adicione uma função dentro do seu objeto (isso se chama Método). Faça o carro ter a ação de buzinar:
//this: Altere o método do seu carro para que ele diga o próprio nome ao buzinar. Para o objeto referenciar a si mesmo, usamos this:
let carro = {
    nome: 'fusca',
    cor: 'azul',
    ano: 1974,
    buzinar: function() {
        console.log(`${this.nome} diz beep!`);
    }
};
carro.cor = 'preto';
console.log(carro);