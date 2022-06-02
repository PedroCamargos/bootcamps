const produto = [
    {
        descricao: "Ovo",
        fabricacao: "01/01/2020",
        vencimento: "01/01/2021"
    },
    {
        descricao: "Extrato de Tomate",
        fabricacao: "01/01/2022",
        vencimento: "01/01/2023"
    }
];

function itemVencido(arrayProdutos, dtaVencimento){
    const novoArray = [];

    for( i = 0 ; i < arrayProdutos.length; i++ ) {

        //object destructuring
        const {descricao, vencimento} = arrayProdutos[i];

        if (vencimento < dtaVencimento) {
            novoArray.push(descricao);
        }
    }
    return novoArray;
}

console.log(itemVencido(produto, "01/01/2022"))