function validaErro(a, b) {
    const soma = (a + b);

    if (soma > 10) throw "Maior que 10.";
        return "Menor ou igual á 10.";
}

console.log(validaErro(5,5));


