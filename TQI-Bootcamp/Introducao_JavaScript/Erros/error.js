
const meuErro = new Error('Mensagem Inválida!');

meuErro.name = 'Nome do meu erro: ';

throw meuErro;

