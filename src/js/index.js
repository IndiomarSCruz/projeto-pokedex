alert("Olá! Bem vindo ao meu site! Codado por Indiomar!! <3");

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle ("modo-escuro");
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});
