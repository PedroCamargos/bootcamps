console.log("********* THIS *********");
const pessoa = {
    firtName: "Pedro",
    lastName: "Silva",
    id: 10,
    fullName: function (){
        return this.firtName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

console.log(pessoa.fullName());
console.log(pessoa.getId());

//Chamada Call com This 2
console.log("\n********* Utilizando CALL + THIS *********");

const carro = {
    modelo: "Honda Civic"
};

const moto = {
    modelo: "Factor"
};

function testeCall(){
    console.log(this.modelo);
}

testeCall.call(moto);

//Chamada Call com This - 3
console.log("\n********* Utilizando CALL + THIS *********");

const numbers = {
    num1: 5,
    num2: 10
}

function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(numbers, 1, 2);

//Chamada Apply com This - 4
console.log("\n********* Utilizando APPLY + THIS *********");

const numeros = {
    number1: 50,
    number2: 20
}

function subtracao(aa, bb){
    console.log(this.number1 - this.number2 - aa - bb);
}

subtracao.apply(numeros, [5,4]);

//Chamada Bind com This - 4
console.log("\n********* Utilizando BIND + THIS *********");

function retornaNome(){
    return this.nome;
};

let pegaNome = retornaNome.bind({nome: 'Pedro'});

console.log(pegaNome());