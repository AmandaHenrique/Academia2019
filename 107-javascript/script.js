let nome = prompt("Digite seu nome");
let senha = prompt("Digite sua senha");
let saldo = 1000;
let senhaCadastrada = "silviosantos9"
let saqueDiario = 500;

if (senha == senhaCadastrada){

   let valorSacar = prompt(`Olá ${nome}, qual o valor que gostaria para saque`);

   if(valorSacar > saldo ){
      alert("O valor do saque é maior que seu saldo")
   }
   
   else if(valorSacar > 0){

      if(valorSacar <= saqueDiario){
         saldo-=valorSacar;
         alert(`Seu saldo atual é de ${saldo}`);
      }
      else{
         alert("O valor ultrapassa o limite diário para saque");
      }
      
   }
   else{
      alert("Digite uma quantia válida");
   }
}else{
   alert("Senha incorreta");
}










/*
Javascript nn é uma linguagem tipada, nn preciso definir os tipos da variavel ao contrario de C# ou Java
    que é int = 3;

    -NaN = not a number = nn é um numero

     == compara apenas se o conteudo da variavel é igual  nao o tipo, sendo assim "14" == 14 é true
        === Serve para comparar o conteudo e o tipo
    
        Não usar mais Var
        typeof nomeDaVar devolve o tipo da variavel


        var list ["um" , "dois"]
        
        Já que a linguagem é não tipada podemos fazer uma lista com valores de tipos diferentes.
        var list = [0 , "list", true]

        Objeto

        let animais = {
                    Atribuição dentro de um objeto é :
                    macaco: ["marrom" , "banana" , 0, true],
                    capivara: ["grande", "pão", 0, true],
                    cachorros: ["lindo", "chocolate", 1, true]
                    }
        
        chamando: animais.macaco[4]

        let casa = {
                    cozinha: ["torneira" , "geladeira" , "fogão", true]
                    banheiro: ["torneira" , "espelho" , "chuveiro", true]
                    quarto: ["cama" , "televisao" , "guarda-roupa", true]
                 }

*/
   
