//Use um loop para ler elementos da tela e alterar as propriedades visuais deles usando o objeto .style.backgroundColor no JS.
function mudarCor(){
    let elementos = document.querySelectorAll('button');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#00f2fe';
    };
};
mudarCor();