const alunos = [
    {
        nome: "Pedro",
        nota: 10
    },
    {
        nome: "Sarah",
        nota: 10
    },
    {
        nome: "Julia",
        nota: 4
    }
];

function alunosAprovados (arrayAlunos, media){
    const novoArrayAlunos = []

    for (let i = 0; i < arrayAlunos.length; i++){

        //object destructuring
        const {nome, nota} = arrayAlunos[i];

        if (nota >= media){
            novoArrayAlunos.push(nome);
        };
    };

    return novoArrayAlunos;
}

console.log(alunosAprovados(alunos, 5));


