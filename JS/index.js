let num1 = '';
let num2 = '';
let operation = '';
let screen = document.getElementById("screen");
let buttonNums = document.querySelectorAll(".botonnum")

function ScreenValue(value){
    screen.innerText = value;
}

function Botones(value){
    if(operation === ''){
        num1 += buttonNums.value
        ScreenValue(num1)
    } else {
        num2 += buttonNums.value
        ScreenValue(num2)
    }
}

function VerificarOP(){
    switch(operation){
        case '+':
            let suma = num1 + num2
            screen.innerText = suma
        case '-':
            let resta = num1 - num2
            screen.innerText = resta
        case '*':
            let multiplicacion = num1 - num2
            screen.innerText = multiplicacion
        case '/':
            let division = num1 - num2
            screen.innerText = division
    }
}   

function Calcular(){
    if(num1 == '' || num2 == '' || operation == ''){
        alert('Por favor, ingrese dos números y una operación.');
        console.log("ERROR")
        Iniciar()
    } else {
        VerificarOP()
    }
}

function Iniciar(){
    num1 = '';
    num2 = '';
    operation = '';
    ScreenValue('Calculadora reiniciada');
}

document.querySelectorAll('.botonnum').forEach(button => {
    button.addEventListener('click', () => Botones());
});
