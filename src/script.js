console.log("Script loaded successfully!");

// Mini Jogo de Adivinhação de Números

// Objetivo: Desenvolver um jogo simples de adivinhação de números.

// Requisitos:

// • O sistema deve gerar um número secreto entre 1 e 100.
let secretNumber = Math.floor(Math.random() * 100) + 1;

// • O jogador terá 10 tentativas para acertar.
let attempts = 10;

// • A cada tentativa:
// • O jogador insere um número.
let numberEnteredByThePlayer = 0;

// • O sistema responde se o número é maior, menor ou igual ao número secreto.
do {
    numberEnteredByThePlayer = Number(prompt("Adivinhe o número entre 1 e 100:"));

    if (numberEnteredByThePlayer === secretNumber) {
        // • Se acertar, mostrar mensagem de parabéns e quantas tentativas foram usadas.
        console.log(`Parabéns! Você acertou o número ${secretNumber} em ${11 - attempts} tentativas.`);
        break;
    } else if (numberEnteredByThePlayer < secretNumber) {
        console.log(`O número secreto é maior que ${numberEnteredByThePlayer}.`);
    } else {
        console.log(`O número secreto é menor que ${numberEnteredByThePlayer}.`);
    };

    console.log(`Você tem ${attempts - 1} tentativas restantes.`);

    attempts -= 1;
    
    // • Se errar todas, revelar o número secreto no final. 
    if (attempts === 0) {
        console.log(`Você perdeu! O número secreto era ${secretNumber}.`);
    };

} while (attempts > 0 || numberEnteredByThePlayer !== secretNumber);


// • Armazenar o histórico de palpites em um array e exibir no console.

// Mini Jogo de Adivinhação de Números

// Conceitos usados:

// •Variáveis para armazenar o número secreto e tentativas.
// •Condicionais para verificar se o chute foi maior/menor.
// •Estruturas de repetição para permitir várias tentativas.
// •Arrays para salvar o histórico de tentativas.

// Extra: ranking simples de quem acertou em menos tentativas.
