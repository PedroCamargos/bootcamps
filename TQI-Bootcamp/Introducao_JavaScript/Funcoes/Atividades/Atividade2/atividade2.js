
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};

const pessoa1 = {
    nome: "Clara",
    idade: 18
};

const pessoa2 ={
    nome: "Sarah",
    idade: 27
};

console.log(calculaIdade.call(pessoa2, 30));

console.log(calculaIdade.apply(pessoa1, [30]));