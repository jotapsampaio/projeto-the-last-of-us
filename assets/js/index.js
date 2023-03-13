/*
    OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.
    Passo 01 => Dar um jeito de pegar o elemento HTML dos botões;
    Passo 02 => Dar um jeito de identificar o clique do usuário no botão;
    Passo 03 => Desmarcar o botão selecionado anterior;
    Passo 04 => Marcar o botão que foi clicado como selecionado;
    Passo 05 => Esconder a imagem ativa de fundo anterior;
    Passo 06 => Fazer aparecer a imagem ativa de fundo correspondente que foi clicada;
*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        removerSelecionadoDoBotao();

        adicionarSelecionadoNoBotao(botao);

        removerAtivaDaImagemDeFundo();

        adicionarAtivaNaImagemDeFundo(indice);
    });
});

function removerSelecionadoDoBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
};

function adicionarSelecionadoNoBotao(botao) {
    botao.classList.add('selecionado');
};

function removerAtivaDaImagemDeFundo() {
    const imagemDeFundoAtiva = document.querySelector('.ativa');
    imagemDeFundoAtiva.classList.remove('ativa');
};

function adicionarAtivaNaImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
};