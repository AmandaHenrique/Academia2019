let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let imagem = document.querySelector("img");
let botao = document.querySelector("button");
let caixa = document.querySelector(".caixa");
let botao2 = document.querySelector(".botao2");
let isFeliz = 0;



trocar = () => {
    if(isFeliz == 0){
        imagem.src = "happyEmoji.png";
        isFeliz = 1;
        body.classList.add("mudarCor");
    }
    else{
        imagem.src = "sadEmoji.png";
        isFeliz = 0;
        body.classList.remove("mudarCor");
    }
}


botao.onclick = trocar;

addCaixa = () =>{
    caixa.classList.toggle("aparecer")
} 

botao2.onclick = addCaixa;