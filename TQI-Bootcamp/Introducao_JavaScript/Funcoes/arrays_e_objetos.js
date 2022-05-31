function soma(x, y, z){
    return x + y + z;
}

function array(a, b, c){
    return [a, b, c];
}

const numeros = [1, 2, 3];

//Spread = uma forma de lidar separadamente com elementos 
//O que era parte de um array, se torna um elemento independente
//utiliza quando esta utilizando a função

console.log("Utilizando Spread");
console.log(`A soma dos valores é: ${soma(...numeros)}`);
console.log(`O array infomrado é: ${array(...numeros)}\n`);

//Rest = Combina os argumentos em uma rray
//O que era um elemento independente, se torna parte de um array 
//utiliza quando esta declarando a função

function confereTamanho(...args) {
    console.log(`O tamanho da lista é: ${args.length}`);
}
console.log("Uilitanzando Rest");
confereTamanho();
confereTamanho(1,2);
confereTamanho(3,4,5);
