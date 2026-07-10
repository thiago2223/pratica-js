//Crie um banco de dados de usuários onde cada posição do array é um objeto completo:
let usuarios = [
    {nome: 'esther ', admin: true},
    {nome: 'Pedro ', admin: false},
    {nome: 'Thiago ', admin: true}
];
console.log(usuarios);
//Use um laço for para varrer o array de usuarios do exercício anterior e use um if dentro dele para imprimir no console apenas os usuários que têm a propriedade admin: true
let admins = [];
for (let indice in usuarios) {
    if (usuarios[indice].admin === true) {
        admins += usuarios[indice].nome
    }
}
console.log(admins)