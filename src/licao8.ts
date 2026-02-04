// 8 - Identificar todas as palavras que começam com letra maiúscula.

const texto7: string = "Cai Peixe gato bola Buxa lula Porco"

let resultado6 = texto7.match(/\b[A-Z][a-zA-Z]*\b/g);

console.log(resultado6);