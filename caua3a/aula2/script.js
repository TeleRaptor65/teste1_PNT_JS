let idade = parseInt(prompt('Idade:'))

let cnh_verification = prompt('Você tem CNH? [s/n]')
let cnh_value

if (cnh_verification == 's'){
    cnh_value = true
} else if (cnh_verification == 'n'){
    cnh_value = false
}

if (cnh_value == false){
    alert('Não pode dirigir')
} else if (cnh_value == true) {
    if (idade >= 18) {
        alert('Pode dirigir')
    } else {
        alert('Não pode dirigir')
    }
}