// Numa outra aplicação você recebe um JSON (abaixo) com compras de vários clientes por CPF. 
// Seu objetivo é exibir o total de todas as compras feitas por um cliente a partir de seu CPF. 
// Escreva abaixo um código que resolva essa questão. 
// (Você também pode incluir comentários e texto explicando sua resolução) *

const pessoas = [
{"cpf": "143.824.350-21", "amount": 34.5 }, 
{ "cpf": "797.853.370-06", "amount": 12 }, 
{ "cpf": "79785337006", "amount": 23.16 }, 
{ "cpf": "143.824.350-21", "amount": 46.4 }, 
{ "cpf": "88835414059", "amount": 26.2 }, 
{ "cpf": "888.354.140-59", "amount": 199.9 }, 
{ "cpf": "797.853.370-06", "amount": 18.16 } 
]
    pessoas.forEach(i => {
    i.cpf = i.cpf.replace(/[^\d]+/g,''); // Utilizei o replace para remover os caracteres do CPF
    //console.log(i.cpf)
  });

  
let cpfs = "79785337006"; // Entrar com o CPF desejado nesta variável

const filtroCpf = pessoas.filter(c => c.cpf.includes(cpfs)); // Estou utilizando o filter lista e trazer os CPFs e o includes para fazer a busca
console.log("Compras realizadas",  filtroCpf)

const valorTotal = filtroCpf.reduce((val , elem) => val + elem.amount, 0); // aqui estou utilizado o reduce para somar os valores do amout do mesmo cpf
console.log("O CPF:", cpfs, "Está devendo:", valorTotal.toFixed(2));



 