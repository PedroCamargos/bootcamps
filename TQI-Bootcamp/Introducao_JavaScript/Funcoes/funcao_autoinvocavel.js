
// (IIFE - Immediately Invoked Funcion Expression)

var nameOne = "Primeiro Nome";

(
    function(){
        var nameTwo = "Segundo Nome";
        return console.log(`Dentro da função - ${nameTwo}`);;
    }

)();//aqui faz a chamada da função 

console.log(`Fora da função - ${nameOne}`);

//ou também pode passar os valores ao declarar a função

(
    function (a,b) {
        return console.log(`O cálculo da soma é ${a+b}`);
    }
)(10,8);
