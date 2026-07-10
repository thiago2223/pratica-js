//Crie um sistema que recebe o plano de um usuário ('Gratuito', 'Premium') e usa switch para listar os benefícios de cada um. Não esqueça do break!
let planoDoUsuario = 'Premium';
switch (planoDoUsuario) {
    case 'Gratuito':
        console.log('Olá usuario')
        break;
    case 'Premium':
        console.log('Olá [Premium]usuario')
        break;
};