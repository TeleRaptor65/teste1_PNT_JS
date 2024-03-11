let pokemon = {
    agua: 'Blastoise',
    fogo: 'Magmar',
    planta: 'Venusaur',
    fada: 'Tinkaton',
};

console.log(pokemon);

pokemon.fantasma = 'Marowak';

console.log(pokemon)

delete pokemon.planta;

console.log(pokemon)

delete pokemon.fada;

console.log(pokemon);