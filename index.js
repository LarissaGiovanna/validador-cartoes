const fs = require('fs');
const readline = require('readline');

// Carrega os padrões de bandeiras de cartão do arquivo padroes.json
const padroes = JSON.parse(fs.readFileSync('padroes.json', 'utf-8'));

// Função para validar o número do cartão usando o algoritmo de Luhn
function validarLuhn(numero) {
    let soma = 0;
    let alternar = false;
    for (let i = numero.length - 1; i >= 0; i--) {
        let n = parseInt(numero.charAt(i), 10);
        if (alternar) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        soma += n;
        alternar = !alternar;
    }
    return (soma % 10) === 0;
}

// Função para identificar a bandeira do cartão
function identificarBandeira(numero) {
    for (const [bandeira, regex] of Object.entries(padroes)) {
        if (new RegExp(regex).test(numero)) {
            return bandeira;
        }
    }
    return null;
}

// Interface para leitura do input do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número do cartão de crédito: ', (numero) => {
    // Remove espaços do número do cartão
    numero = numero.replace(/\s+/g, '');
    
    if (validarLuhn(numero)) {
        const bandeira = identificarBandeira(numero);
        if (bandeira) {
            console.log(`Bandeira do cartão: ${bandeira}`);
        } else {
            console.error('Erro: Bandeira do cartão não é válida.');
        }
    } else {
        console.error('Erro: Número do cartão não é válido.');
    }
    rl.close();
});