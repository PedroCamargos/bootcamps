
function encontraMaximo() {
    let max = -Infinity;
    
    //pegando o argumento de uma função, para fazer a contagem dos valores e definir o seu máximo 
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return console.log(max);
}

encontraMaximo(1,5,80,77,99,500,2,18,20);