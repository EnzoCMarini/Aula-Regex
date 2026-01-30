// 1 - Encontrar todas as ocorrências da palavra “dog” em um texto.

let texto: string = "asgegangnduenmbjgdognbufhtnamslgoalengpaowqughtnedsndogmajgurhendsa"

let textoFormatado = texto.match(/dog/g);

console.log(textoFormatado);

// 2 - Localizar todos os números (ex.: 123, 45, 6789).

let texto2: string = "asfgrjubjuxjudj1gsnjdbnj2yjmnfkslj3njb4bdjsm5nbja67nvnsnb8sbsgfwfgas9"

let resultado = texto2.replace(/\D/g, "");

console.log(resultado);

// 3 - Identificar palavras que começam com a letra “b”.

let texto3: string = "capanga batuta horario besta hiato canto bobao"

let resultado2 = texto3.match(/\bb\w*/g);

console.log(resultado2);

// 4 - Achar todas as palavras que terminam com “s”.

let texto4: string = "sigma mundos fins oloko turnos sou vocativos"

let resultado3 = texto4.match(/\w*s\b/g);

console.log(resultado3);

// 5 - Valide endereços de e-mail simples (ex.: teste@exemplo.com).

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let email: string = "gregor@gcorp.com"

if (emailRegex) {
    console.log(`O E-mail ${email} está validado`);
} else
    console.log(`O E-mail ${email} não está validado`);

// 6 - Encontrar todas as sequências de 3 dígitos seguidos (ex.: 456, 789).


// 7 - Localizar palavras com exatamente 4 letras.


// 8 - Identificar todas as palavras que começam com letra maiúscula.


// 9 - Achar todas as ocorrências da palavra “car” ou “bus”.


// 10 - Extrair o conteúdo entre parênteses (ex.: (texto aqui)).