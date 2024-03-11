let nome = prompt('Nome:');

let idade = parseInt(prompt('Idade:'));

if (idade < 18) {
    alert(`De menor não entra na balada, ${nome}`)
}
else if (idade >= 18){
    alert(`Pode entrar, ${nome}`)
};