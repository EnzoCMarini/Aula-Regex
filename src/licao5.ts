// 5 - Valide endereços de e-mail simples (ex.: teste@exemplo.com).

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let email: string = "gregor@gcorp.com"

if (emailRegex) {
    console.log(`O E-mail ${email} está validado`);
} else
    console.log(`O E-mail ${email} não está validado`);
