let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

const printPalavras = () => {
    console.log(palavras);
};

let fraseMontada = palavras.join('<->');

const printFraseMontada = () => {
    console.log(fraseMontada);
};

const repeatFraseMontada = () => {
    console.log(fraseMontada.repeat(32));
};