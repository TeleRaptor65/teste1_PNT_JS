const time = {
    "PE": "Santa Cruz",
    "SP": "Palmeiras",
    "MG": "Cruzeiro",
    "RS": "Internacional"
}

let jsonToString = JSON.stringify(time);

console.log(jsonToString);

let stringToJason = JSON.parse(jsonToString);

console.log(stringToJason);