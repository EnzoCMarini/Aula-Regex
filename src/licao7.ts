// 7 - Localizar palavras com exatamente 4 letras.

const texto6: string = "peixe bola gato carro sol lua mesa flor pote"

let resultado5 = texto6.match(/\b[a-zA-Z]{4}\b/g);

console.log(resultado5);
