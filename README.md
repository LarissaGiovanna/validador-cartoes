<!-- Este arquivo foi gerado com a ajuda do GitHub Copilot -->

# Validação de Bandeiras de Cartão de Crédito

Este projeto é um aplicativo simples em JavaScript para validar bandeiras de cartões de crédito. A aplicação utiliza padrões de regex para identificar a bandeira do cartão e o algoritmo de Luhn para validar o número do cartão.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

### Arquivos

- `index.js`: Contém o código principal da aplicação.
- `padroes.json`: Contém os padrões de regex para identificar as bandeiras dos cartões de crédito.
- `padroes.txt`: Contém uma descrição dos padrões de cada bandeira de cartão de crédito.

## Funcionalidades

1. **Validação do Número do Cartão**: Utiliza o algoritmo de Luhn para verificar se o número do cartão é válido.
2. **Identificação da Bandeira do Cartão**: Utiliza regex para identificar a bandeira do cartão com base no número fornecido.

## Como Executar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do projeto.
4. Execute o comando `node index.js` para iniciar a aplicação.
5. Digite o número do cartão de crédito quando solicitado.

## Exemplo de Uso

```sh
$ node index.js
Digite o número do cartão de crédito: 4111111111111111
Bandeira do cartão: Visa
```

## Algoritmo de Luhn

O algoritmo de Luhn é utilizado para validar o número do cartão de crédito. Ele verifica se a soma dos dígitos do cartão, após algumas manipulações, é divisível por 10.

## Padrões de Bandeiras

Os padrões de bandeiras de cartões de crédito são definidos no arquivo padroes.json utilizando expressões regulares (regex). Aqui está um exemplo do conteúdo do arquivo:

```json
{
    "Mastercard": "^(5[1-5][0-9]{14}|2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720)[0-9]{12})$",
    "Visa": "^4\\d{12}(\\d{3})?$",
    "American Express": "^3[47]\\d{13}$",
    "Diners Club": "^3(0[0-5]|[68]\\d)\\d{11}$",
    "Discover": "^6(?:011|5\\d{2})\\d{12}$",
    "Enroute": "^2(?:014|149)\\d{11}$",
    "JCB": "^(?:2131|1800|35\\d{3})\\d{11}$",
    "Voyager": "^8699\\d{11}$",
    "Hipercard": "^(38|60)\\d{11,17}$",
    "Aura": "^50\\d{14}$"
}
```

## Conclusão

Este projeto é uma implementação simples para validar e identificar bandeiras de cartões de crédito utilizando JavaScript. Ele pode ser expandido para incluir mais funcionalidades ou ser integrado em outras aplicações que necessitem dessa validação.
