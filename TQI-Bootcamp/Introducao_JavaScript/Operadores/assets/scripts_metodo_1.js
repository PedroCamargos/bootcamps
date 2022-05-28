
function calcOperadores() {
    const num1 = Number(prompt('Informe o Primeiro Número:'));
    const num2 = Number(prompt('Informe o Segundo Número:'));
    const soma = num1 + num2;

    if (!num1 || !num2) {
        alert('Digite um número válido!');
        calcOperadores();

    } else {
        if (num1 == num2 && soma > 10 && soma < 20) { 
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
            repetirOperacao();

        } else if (num1 == num2 & soma == 10) { 
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é igual á 10 e menor que 20.`);
            repetirOperacao();

        } else if (num1 == num2 && soma == 20) { 
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e igual á 20.`);
            repetirOperacao();

        }else if (num1 == num2 && soma < 10) { 
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
            repetirOperacao();

        } else if (num1 == num2 && soma > 10 && soma > 20) { 
            alert(`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
            repetirOperacao();

        } else if (num1 != num2 && soma > 10 && soma < 20) {  
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
            repetirOperacao();

        } else if (num1 != num2 && soma < 10) { 
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
            repetirOperacao();

        } else if (num1 != num2 && soma > 10 && soma > 20) { 
            alert(`Os números ${num1} e ${num2} são diferentes. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
            repetirOperacao();
        }

        function repetirOperacao() {
            let repeticao = prompt('Fazer o calculo novamente? Digite: \n S para sim.\n N para não.');
    
            if (repeticao == 'S') {
                calcOperadores();
            } else if (repeticao == 'N') {
                alert('Até a proxíma!');
            } else {
                alert('Digite uma entrada válida!');
                repetirOperacao();
            }
        }
    }

}

calcOperadores();
