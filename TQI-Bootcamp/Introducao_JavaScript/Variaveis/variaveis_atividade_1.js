//solução 1
 function verificaPalindromo(string) {
     if (!string) {
         return ("String inexistente.");
     } else {
         //split = separa todas as letras criando um array com todos os caracteres
         //reverse = o ultimo vira primeiro, o primeiro vira o ultimo 
         //join = junta todos os elementos do array, voltando a ser uma string
         return string.split("").reverse().join("") === string;
     }
 }
 console.log(verificaPalindromo("ama"));

//solução 2

function verificaPalindromo2(string) {
    if (!string) return ("String inexistente.");

        for(let i = 0; i < string.length / 2; i++) {
            if (string[i] !== string[string.length - 1 - i]) {
                return false;
            }   
        }
        
    return true;
}
console.log(verificaPalindromo2("upa"));
