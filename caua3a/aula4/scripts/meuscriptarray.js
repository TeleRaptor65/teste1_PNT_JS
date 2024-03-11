const idades = []

const nomes = []

let pessoas = parseInt(prompt('Quantas idades serão inseridas?'))

for (let c = 0; c < pessoas; c++) {
    nomes[c] = prompt(`${c+1}º Nome: `)
    idades[c] = parseInt(prompt(`Idade de ${nomes[c]}`));
}