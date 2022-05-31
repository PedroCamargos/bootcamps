//funcao que é passada como argumento para outra função

//exemplo:

const calc = function(operacao, num1, num2){
    return console.log(operacao(num1, num2));
}

const soma = function(num1, num2){
    return console.log((num1+num2));
}

const subtracao = function(num1, num2){
    return console.log((num1-num2));
}

const multiplicacao = function(num1, num2){
    return console.log((num1*num2));
}

const resultadoSoma = calc(soma, 10, 20);
const resultadoSubtracao = calc(subtracao, 50, 25);
const resultadoMultiplicaco = calc(multiplicacao, 5,7);
