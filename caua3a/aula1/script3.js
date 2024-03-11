const login = 'Smurf de Braun';

const senha = 'poro_energy_for_skin_lol';

let login_input = prompt('Login:');

let senha_input = prompt('Senha:');

if (login_input == 'Smurf de Braun') {
    if (senha_input == 'poro_energy_for_skin_lol'){
        console.log('Seja bem vindo ao League of Draven!');
    }
    else {
        console.log('Senha incorreta');
    }
}
else {
    console.log('Login incorreto');
};