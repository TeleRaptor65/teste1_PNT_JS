//  questão 1 //
// by: Cauã

const ask_3_numbers = () => {

    let nums = [];

    for (let i = 0; i < 3; i++) {
        nums[i] = parseFloat(prompt(`Insira o ${i+1}º número: `));
    };

    alert(`Array pura: ${nums} \nArray modificada: ${nums.reverse()}`);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  questão 2 //
// by: Lucas
const my_fruits = () => {
    fruta = ['Maçã', 'Jambo', 'Banuina', 'Mango'];

    alert(`Minhas frutas favoritas:\n${fruta.join(', ')}`);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 3 //
// by: Cauã

const impopar = () => {
    const numeros = [0, 1, 2, 3, 4, 5];

    numeros.forEach(numeros => {
        if (numeros == 0){
            console.log(`${numeros} é um número neutro`)
        } else if (numeros % 2 === 0){
            console.log(`${numeros} é um número par`)
        } else {
            console.log(`${numeros} é um número ímpar`)
        };
    });
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 4
// by: Cauã & Lucas

const registrar = () => {

    let user_name = prompt('Nome de usuário: ');
    let pword = '';
    let error = true;
    

    while (error == true) {

        pword = prompt('Senha: ');

        if (pword == user_name) {
            alert('Erro. Sua senha não pode ser idêntica ao seu nome de usuário')
    
            error = true
        } else {

            alert('Registro feito com sucesso')
            
            error = false
            break   
        };
    };
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 5
// by: Lucas

function primo(){
    const numPrimo = parseInt(prompt('Digite um número: '));

    if (numPrimo == 0) {

        alert(`O número 0 é um número neutro`)
        
    } else if (numPrimo == 2 || numPrimo == 3 || numPrimo == 5 || numPrimo == 7) {

        alert(`${numPrimo} é um número primo`)

    } else if (numPrimo % 2 === 0 || numPrimo % 3 === 0 || numPrimo % 5 === 0 || numPrimo % 7 === 0 ) {
        
        alert(`${numPrimo} não é um número primo`)
    } else {

        alert(`${numPrimo} é um número primo`)
    };
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 6
// by: Lucas

function fatorial(){
    let valorFatorial = 10;

    for (let i = 10; i > 0; i--) {
        valorFatorial *= i;
    };

    alert(`10! = ${valorFatorial}`);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 7
// by: Cauã & Lucas


function get_book() {

    function book(livro) {

        let biblioteca = {
            livro1: 
                    jurassicpark = {
                    quantidade_paginas: 365,
                    autor: 'Michael Crichton',
                    editora: 'Shonen Jump' 
                },

            livro2: 
                    maktub = {
                    quantidade_paginas: 123,
                    autor: 'Paulo Coelho',
                    editora: 'Jardim dos Livros'
                },

            livro3: 
                    a_arte_da_guerra = {
                    quantidade_paginas: 323,
                    autor: 'Sun Tzu',
                    editora: 'E eu sei lá'
                }
            };

        livros_print = ['Jurassic Park', 'Maktub', 'A Arte da Guerra'];

        alert('Mostrar\n\n1 - Jurassic Park \n2 - Maktub \n3 - A Arte da Guerra');

        livro = parseInt(prompt('Insira a numeração da sua escolha:'));

        switch (livro) {

            case 1:

                alert(`Páginas: ${biblioteca.livro1.quantidade_paginas} \nAutor: ${biblioteca.livro1.autor} \nEditora: ${biblioteca.livro1.editora}`);
                break;


            case 2:

                alert(`Páginas: ${biblioteca.livro2.quantidade_paginas} \nAutor: ${biblioteca.livro2.autor} \nEditora: ${biblioteca.livro2.editora}`);
                break;


            case 3:

                alert(`Páginas: ${biblioteca.livro3.quantidade_paginas} \nAutor: ${biblioteca.livro3.autor} \nEditora: ${biblioteca.livro3.editora}`);
                break;

            default:

                alert(`Livro 1: ${livros_print[0]} \nPáginas: ${biblioteca.livro1.quantidade_paginas} \nAutor: ${biblioteca.livro1.autor} \nEditora: ${biblioteca.livro1.editora}`)
                alert(`Livro 2: ${livros_print[1]} \nPáginas: ${biblioteca.livro2.quantidade_paginas} \nAutor: ${biblioteca.livro2.autor} \nEditora: ${biblioteca.livro2.editora}`)
                alert(`Livro 3: ${livros_print[2]} \nPáginas: ${biblioteca.livro3.quantidade_paginas} \nAutor: ${biblioteca.livro3.autor} \nEditora: ${biblioteca.livro3.editora}`)        
                break;
            };
    };

    book()
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 8
// by: Lucas

function carro(){
    let objCarro = {
        marca: "Fiat",
        modelo: "Argo",
        placa: "123dafg3",
        ano: "2024",
        cor: "Vermelho",
        quantasPortas: "4",
        assentos: "5",
        quantidadePessoas: "5",
    };

    let obterCor = () => {
        return objCarro.cor;
    };
    let obterModelo = () => {
        return objCarro.modelo;
    };

    alert(`Cor do Carro: ${obterCor()}\nModelo do Carro: ${obterModelo()}`);
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 9
// by: Lucas

const numWhile = () => {
    let num = 10;

    console.log('Números pares entre 10 e 20:');
    while (num <= 20) {
        if (num % 2 === 0) {
            console.log(num);
        };
        num++;
    };
    
    num = 10; // Reiniciando o número para 10

    console.log('Números ímpares entre 10 e 20:');
    while (num <= 20) {
      if (num % 2 !==  0) {
        console.log(num);
      };
      num++;
    };

    alert('Olhe o console!')
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 10
// by: Lucas

const nome = () => {
    // Criando um array com cada letra do nome "Lucas Gabriel Ramos da Silva"
    let myName = ['L', 'u', 'c', 'a', 's', ' ', 'G', 'a', 'b', 'r', 'i', 'e', 'l', ' ', 'R', 'a', 'm', 'o', 's', ' ', 'd', 'a', ' ', 'S', 'i', 'l', 'v', 'a'];

    // Juntando todos os itens do array para formar o nome completo
    let nomeCompleto = myName.join('');
    console.log(nomeCompleto); // Saída: Lucas Gabriel Ramos da Silva

    // Invertendo o array e juntando os itens para formar o nome invertido
    let nomeInvertido = myName.reverse().join('');
    console.log(nomeInvertido); // Saída: avliS ad somaR leirbaG sacuL

    alert('Olhe o console!')
};