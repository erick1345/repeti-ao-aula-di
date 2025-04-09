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

const prompt = require("prompt-sync")();

const senhaa = 102050;
let senhasolicitada;
do {
    senhasolicitada = prompt("Informe a senha: ");
    if (senhasolicitada != senhaa) {
        console.log("A senha solicitada está errada");
    } else {
        console.log("Bem-vindo");
    }
} while (senhasolicitada != senhaa);

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

// Exercicio sobre populacao
let paisA = 900000000; // População inicial do país A
let paisB = 2000000000; // População inicial do país B
let qtdAnos = 0;

while (paisB > paisA) {
    paisA = paisA * 1.04; // Crescimento de 4% ao ano
    paisB = paisB * 1.0195; // Crescimento de 1.95% ao ano
    qtdAnos++;
}

console.log("Levou " + qtdAnos + " anos para o país A passar a população do país B");
