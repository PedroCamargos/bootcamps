//Executa a condição até que se torne falsa

//1 while
console.log("********* SEGUNDO WHILE *********");
function contador(){
    let num_contado = 0;

    while (num_contado <= 5 ){
        num_contado++;
        console.log(num_contado);
    }
}

contador();

//2 while - Sera executado pelo menos 1x, pois a condição ficará depois do DO 
console.log("\n********* SEGUNDO WHILE *********");

function contadorDoWhile() {
    let numeracao = 6;

    do {
        console.log(numeracao);
        numeracao++;
    } while (numeracao <= 5);
}

contadorDoWhile();
