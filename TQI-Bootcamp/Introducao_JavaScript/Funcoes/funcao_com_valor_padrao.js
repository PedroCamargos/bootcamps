
function exponcencial(array, num = 1){
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}

console.log("Impressão da função apenas com array:");
console.log(exponcencial([1, 2, 3, 4]));

console.log("Impressão da função com array + num");
console.log(exponcencial([1, 2, 3, 4], 5));