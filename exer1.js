// Você está criando um código que irá se integrar a uma API externa. Essa API retorna um resultado em JSON
// (abaixo) contendo o nome e a idade de várias pessoas. 
// Seu código deverá retornar essa mesma listagem,porém ordenada pela idade crescente. 
// Caso a idade seja igual, as pessoas devem ser ordenadas pelo nome crescente. 
// Abaixo um código que resolva essa questão. 
// (Você também pode incluir comentários e texto explicando sua resolução) *

const pessoas =[
{"nome": "Maria", "idade": 45 }, 
{ "nome": "João", "idade": 50 }, 
{ "nome": "Pedro", "idade": 23 }, 
{ "nome": "Pedro", "idade": 23 }, 
{ "nome": "Ana", "idade": 62 } 
]

const idades = pessoas.map(num => num.idade)// usando o map para retornar uma array apenas com as idades

// Função que verifica as duplicidades dentro da array idades
function duplicado(array) {
    return (new Set(array)).size !== array.length;
}

// Caso tenha duplicidade ordenado por nome
if(duplicado(idades) == true){ 
    pessoas.sort(function(x,y){ // sort para o denar os valores da array
         if(x.nome < y.nome){
            return -1;
         }
    });
// Caso não tenha duplicidade ordenado por idade
}else{                         
    pessoas.sort(function(x,y){
        if(x.idade < y.idade){
           return -1;
        }
   });
}

console.log(pessoas)


