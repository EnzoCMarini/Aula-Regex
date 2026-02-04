// 10 - Extrair o conteúdo entre parênteses (ex.: (texto aqui)).

let texto9: string = "asjdnajsdn(lololo)asjdnajsdn(blabla)asjdnajsdn(ola)"

let resultado8 = texto9.match(/\(([^)]+)\)/g);

console.log(resultado8);