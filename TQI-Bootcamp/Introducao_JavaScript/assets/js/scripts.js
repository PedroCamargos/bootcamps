var currentNumberCalc = document.getElementById('currentNumber');
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    if (currentNumber < 0){
        currentNumberCalc.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = '#8B000';
    } else {
        currentNumberCalc.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = 'white';
    }
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    if (currentNumber < 0){
        currentNumberCalc.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = '#8B0000';
    } else {
        currentNumberCalc.innerHTML = currentNumber;
        document.getElementById('currentNumber').style.color = 'white';
    }
    
}
