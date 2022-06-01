//1° for 
console.log("************** PRIMEIRO FOR **************\n");
function multiplicaPorDois(array) {
    let multiplicados = [];

    for(let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }

    return multiplicados;
}

const meusNumeros=[1,2,3,4,5,6,7,8,9];

console.log("O resultado do array multiplicado por 2 é: ");
console.log(multiplicaPorDois(meusNumeros));

//tipo de for 2
console.log("\n************** SEGUNDO FOR **************\n");

function forInExemplo(objeto){
    for(prop in objeto){
        console.log(prop); //cada propriedade
    }
}

function forInExemploTwo(objeto2){
    for(prop in objeto2) {
        console.log(objeto2[prop]); //valor de cada propriedade
    }
}

const meuObjeto = {
    nome: "Pedro",
    idade: "26",
    cidade: "Uberlândia"
}
console.log("Verificando as propriedades e valores");

console.log("Propriedades :");
console.log(forInExemplo(meuObjeto));

console.log("\nValores :");
console.log(forInExemploTwo(meuObjeto));

// tipo for 3
console.log("\n************** TERCEIRO FOR **************\n");

function soletrando(palavra){
    for (letra of palavra){
        console.log(letra);
    }
}

const palavra = "Refrigerante";

console.log("A palavra soletrada é: ");
console.log(soletrando(palavra));

// tipo for 4
console.log("\n************** QUARTO FOR **************\n");

function logNumeros(lista_numeros){
    for(numero of lista_numeros){
        console.log(numero);
    }
}

const lista_numeros = [20,30,40,50];

console.log("\nOs números são: ");
console.log(logNumeros(lista_numeros));