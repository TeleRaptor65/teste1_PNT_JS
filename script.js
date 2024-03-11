//  questão 1 //
// by: Cauã

const ask_3_numbers = () => {

    let nums = []

    for (let i = 0; i < 3; i++) {
        nums[i] = parseFloat(prompt(`Insira o ${i+1}º número: `))
    }

    alert(`Array pura: ${nums} \nArray modificada: ${nums.reverse()}`)
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  questão 2 //
// by: Lucas
const my_fruits = () => {
    fruta = ['Maçã', 'Jambo', 'Banuina', 'Mango'];

    alert(`Minhas frutas favoritas:\n${fruta.join(', ')}`)
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 3 //
// by: Cauã

const impopar = () => {
    const numeros = [0, 1, 2, 3, 4, 5]

    numeros.forEach(numeros => {
        if (numeros == 0){
            console.log(`${numeros} é um número neutro`)
        } else if (numeros % 2 === 0){
            console.log(`${numeros} é um número par`)
        } else {
            console.log(`${numeros} é um número ímpar`)
        }
    })
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 4
// by: Cauã & Lucas

const registrar = () => {

    let user_name = prompt('Nome de usuário: ') 
    let pword = ''
    

    while (error = true) {

        pword = prompt('Senha: ')

        if (pword == user_name) {
            alert('Erro. Sua senha não pode ser idêntica ao seu nome de usuário')
    
            error = true
        } else {

            alert('Registro feito com sucesso')
            
            error = false
            break   
        }
    }
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 5
// by: Lucas

function primo(){
    const numPrimo = prompt('Digite um número: ');

    if (condition) {
        
    } else {
        
    };
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 6
// by: Lucas

function fatorial(){
    let valorFatorial = 10

    for (let i = 10; i > 0; i--) {
        valorFatorial *= i
    };

    alert(`10! = ${valorFatorial}`)
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// questão 7
// by: Cauã & Lucas


const get_book = () => {

    alert('1 - Jurassic Park \n2 - Maktub \n3 - A Arte da Guerra')

    const book = (livro) => {

        let biblioteca = {

            livro1: jurassicpark = {
                quantidade_paginas: 365,
                autor: 'Michael Crichton',
                editora: 'Shonen Jump'
            },

            livro2: maktub = {
                quantidade_paginas: 123,
                autor: 'Paulo Coelho',
                editora: 'Jardim dos Livros'
            },

            livro3: a_arte_da_guerra = {
                quantidade_paginas: 323,
                autor: 'Sun Tzu',
                editora: 'E eu sei lá'
            }

            
        }

        alert(livro)
    }
}

// questão 8
// by: Lucas

const carro = () => {
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

    const obterCor = () => {
        return objCarro.cor;
    };
    const obterModelo = () => {
        return objCarro.modelo;
    };

    alert(`Cor do Carro: ${carro.obterCor()}\nModelo do Carro: ${carro.obterModelo()}`);
};
