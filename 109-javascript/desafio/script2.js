let botao = document.querySelector(".botao");
let menu = document.querySelector(".menu");


function mostrar(){
    menu.classList.toggle("aparecer");
}

botao.onclick = mostrar;