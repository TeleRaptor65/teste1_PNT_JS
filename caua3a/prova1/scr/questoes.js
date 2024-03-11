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

// questão 6
// by: Cauã & Lucas


const get_book = () => {

    let livro = prompt('Nome: ') 

    const book = (livro) => {

        let biblioteca = {

            livro1: JurassicPark = {
                quantidadePaginas: 365,
                autor: 'Michael Crichton'
            }
        }
    }

}
