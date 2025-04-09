 let count = 0;

 do {
     console.log(`Count is: ${count}`);
     count++;
 } while (count < 20);

 let number = 10;

 while (number > 0) {
     console.log(`Number is: ${number}`);
     number--;
 }

 const prompt = required("prompt-sync")();

 const senhaa = 102050;
 let senhasolicitada;
 do{
     senhasolicitada = prompt("informe a senha:");
     if (senhasolicitada != senha){
         console.log("a senha solicitada esta errada");
     }else(
         console.log("bem vindo")
     )
 }while

 const prompt = require("prompt-sync")(); 

 let numero;

 do {
     numero = parseInt(prompt("Informe um número inteiro positivo: "), 10);
     if (isNaN(numero) || numero < 0) {
         console.log("Por favor, insira um número inteiro positivo válido.");
     }
 } while (isNaN(numero) || numero < 0);

 // Contagem regressiva usando o laço while
 while (numero >= 0) {
     console.log(numero);
     numero--;
 }

// exercicio sobre populacao
let paisA= 900000000
let paisB= 2000000000
let qtdAnos = 0;

while (paisB > paisA) {
    paisA = paisA * 1.04;
    paisB = paisB * 1.0195;
    qtdAnos++;
}

console.log("levou "+qtdAnos+" anos para o pais a passar a populaçao do pais B");
