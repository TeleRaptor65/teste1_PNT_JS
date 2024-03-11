const random_num = (a, b) =>{
    return Math.floor(Math.random() * (a + b + 1)) - a;
}

console.log(random_num(1, 20));