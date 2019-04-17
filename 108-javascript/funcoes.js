
function media(nome, n1, n2, n3){
    soma = n1 + n2 + n3;
    media = soma/3;

    return `${nome}: ${media.toFixed(2)}`;
}

console.log(media("Amanda", 4,7.5,10));

// funçao anonima/sem nome

let coco = function(){
            console.log('oi');
}

coco();

// arrow function

// USAR ISSOOO
calculo = (a,b,c) =>{ return a+b+c };
// nome-parametros-oq a funcao vai fazer e o que retornara 

console.log(calculo(1,1,1));