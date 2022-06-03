function recebeArray(array, numero){

    try {
        if (!array && !numero) 
            throw new ReferenceError("Envie os parâmetros!");
    
        if (typeof array !== 'object') 
            throw new TypeError("O array precisa ser object!");
    
        if (typeof numero !== 'number') 
            throw new TypeError("O numero precisa ser number!");
    
        if (array.length !== numero) 
            throw new RangeError("Tamanho inválido");

        return array;
 
    } catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é do tipo Reference Error");
            console.log(e.message);

        } else if (e instanceof TypeError) {
            console.log("Este erro é do tipo Type Error");
            console.log(e.message);

        } else if (e instanceof RangeError) {
            console.log ("Este erro é do tipo Range Error");
            console.log(e.message);

        } else {
            console.log("Tipo de erro não esperado: "+ e);
        }
    }
}

console.log(recebeArray([], 'a'));
