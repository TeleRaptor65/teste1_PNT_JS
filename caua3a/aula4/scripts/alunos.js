let terceiro_ano_c = {
    aluno1: 'Aquiles',
    aluno2: 'Miguel',
    aluno3: 'Christopher',
    aluno4: 'Camila',
};

let terceiro_ano_a = {
    aluno5: 'Dimas',
    aluno6: 'ALice',
    aluno7: 'Nicolas',
    aluno8: 'Allan',
};

Object.assign(terceiro_ano_c, terceiro_ano_a);

console.log(terceiro_ano_c);

console.log(Object.keys(terceiro_ano_c));