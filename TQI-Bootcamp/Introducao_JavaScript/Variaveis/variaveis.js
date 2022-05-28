//VAR e LET 
//o let fica apenas dentro do bloco de código 

var firstName = "Pedro";
var lastName = "Camargos";

if(firstName === "Pedro"){
    let firstName = "Paulo";
    let lastName = "Silva" 
    
    console.log('VAR e LET = Nome dentro do 1° IF = '+ firstName, lastName);
}

console.log('VAR e LET = Nome fora do IF = ' + firstName, lastName);

//CONSTANTE
//declara e ja atribuí
const FIRST_NAME = "Pedro Paulo S. Camargos";

console.log('CONST = Nome dentro da constante = '+FIRST_NAME);

