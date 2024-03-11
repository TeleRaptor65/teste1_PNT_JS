const price_apple_default = parseFloat(0.30);

const price_apple_dozen = parseFloat(0.25);

let units = parseInt(prompt('Quantidade de Maçãs a serem comrpadas:'));

if (units < 12) {
    total_price = price_apple_default * units
    
    alert(`Total: R$ ${total_price.toFixed(2)}`);

} else {
    total_price = price_apple_dozen * units
    
    alert(`Total: R$ ${total_price.toFixed(2)}`);

};