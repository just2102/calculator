let inputField =   document.getElementById("input_field");
//array that stores all the input//
let array   =   []
function increment(a,b) {
    return a+b;
}
function subtract (a,b) {
    return a-b;
}
function multiply (a,b) {
    return a*b;
}
function divide (a,b) {
    return a/b;
}
// displays clicked buttons in the field
function buttonClick(btn) {
    inputField.value += btn;
    array.push(btn);
}
//variable to store operator
let operator    =   '';
function getOperator(button) {
    operator = button;
}
// onclick event to get operator from each button
const incrementButton =   document.getElementById("button-increment");
incrementButton.addEventListener("click",function() {
    getOperator('+');
})

const subtractButton  =   document.getElementById("button-subtract");
subtractButton.addEventListener("click",function() {
    getOperator('-')
})

const multiplyButton  =   document.getElementById("button-multiply");
multiplyButton.addEventListener("click",function() {
    getOperator('*');
});


let divideButton    =   document.getElementById("button-divide");
divideButton.addEventListener("click",function() {
    getOperator('/');
})


// итерировать через array ДО первого оператора 
// после этого выделить эту часть массива в отдельный массив. использовать .join, затем Number()
let aString   =   ''
let bString   =   ''
function iterateOverArray() {
    for (let i=0;i<array.indexOf(operator);i++) {
        aString+=array[i]
    }
    for (let j=array.indexOf(operator);j<array.length;j++) {
        bString+=array[j];
    }
}

let evaluateButton  =   document.getElementById("button-result");
    evaluateButton.addEventListener("click",function() {
        evaluate();
    })
    

function evaluate(a,b) {
    iterateOverArray();
    a = Number(aString);
    b = Number(bString);
    console.log(a);
    console.log(b);

    let result = 0;
    if (operator=='+') {
        result = increment(a,b);
        inputField.value    =   result;
        aString =   result;
        bString =   ''
        array=Array.from(result);

    } else if (operator=='-') {
        inputField.value    =    subtract(a,b);
        aString =   subtract(a,b)
        bString =   ''
    } else if (operator=='*') {
        inputField.value    =    multiply(a,b);
        aString =   multiply(a,b)
        bString =   ''
    } else if(operator=='/') {
        inputField.value    =   divide(a,b);
        aString =   divide(a,b)
        bString =   ''
    }
}


document.getElementById("button-clear").addEventListener("click",clear)
function clear() {
    array=[];
    inputField.value    =   ''
    aString =   '';
    bString =   '';
}