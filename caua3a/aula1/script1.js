let nome = prompt('Olá, como se chama?');

let idade = parseInt(prompt(`${nome}, qual sua idade?`));

let altura = parseFloat(prompt(`E qual é a sua altura,${nome}?`) );

let massa = parseFloat(prompt(`E qual é sua massa atual, ${nome}?` ));

let deficiencia = Boolean(prompt(`Você possui algum tipo de deficiência, ${nome}?`));

let altura_quadrado = Math.pow(altura,2);

let imc = massa/altura_quadrado;


if (imc > 25){
    alert(`IMC: ${imc} | Obesidade`)
} 
else if (imc > 22){
    alert(`IMC: ${imc} | Sobrepeso`)
}
else if (imc > 18){
    alert(`IMC: ${imc} | Peso Ideal`)
}
else if (imc < 18){
    alert(`IMC: ${imc} | Magreza`)
};