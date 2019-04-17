let idade = prompt("Qual sua idade");
let posicao = 0;

let filmes = [
    {titulo: "Os incriveis" , classificacao: 0},
    {titulo: "Star Wars" , classificacao: 14},
    {titulo: "Creed" , classificacao: 18}
];

for (let i in filmes){
    if (idade >= filmes[i].classificacao){
        alert(filmes[i].titulo);
    }
}
