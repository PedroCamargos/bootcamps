//Equivale a uma comparação de tipo e valor (===)

//Sempre precisa de um valor "default"

//Ideal para quando se precisa comparar muitos valores

function validaAnimal(id){
    switch(id){
        case 1:
            return "Cão";
        case 2:
            return "Gato";
        case 3:
            return "Pássaro";
        case 4:
            return "Tartaruga"
        case 5:
            return "Peixe";
        default:
            return "Leão";
    }
}

console.log(validaAnimal(1));
console.log(validaAnimal("5"));
console.log(validaAnimal(5));