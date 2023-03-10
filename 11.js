// As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false

const bissexto = (age) =>{
    if(age <= 0){
        return false;
    }else if(age % 400 == 0){
        return true;
    }else if(age % 100 == 0){
        return true;
    }else if(age % 4 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(bissexto(0));
console.log(bissexto(4));
console.log(bissexto(2020));
console.log(bissexto(2023));