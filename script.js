const currentOutput = document.getElementById("current_output");
const previousOutput = document.getElementById("previous_output");
let firstNumber, secondNumber, final;
let currentOperator = null;

document.addEventListener("click", (e) => {
    eventTranslator(e.target.id);
});

document.addEventListener("keydown", (e) => {
    eventTranslator(e.key);
 
});


function eventTranslator(input){
    
    if (input == "zero" || input == 0){
        htmlCalc(0);
    }else if(input == "one" || input == 1){
        htmlCalc(1);
    }else if(input == "two" || input == 2){
        htmlCalc(2);
    }else if(input == "three" || input == 3){
        htmlCalc(3);
    }else if(input == "four" || input == 4){
        htmlCalc(4);
    }else if(input == "five" || input == 5){
        htmlCalc(5);
    }else if(input == "six" || input == 6){
        htmlCalc(6);
    }else if(input == "seven" || input == 7){
        htmlCalc(7);
    }else if(input == "eight" || input == 8){
        htmlCalc(8);
    }else if(input == "nine" || input == 9){
        htmlCalc(9);
    }else if(input == "comma" || input == "."){
        appendComma(".");
    }else if(input == "divide" || input == "/"){
        operate("÷");
    }else if(input == "multiply" || input == "*"){
        operate("×");
    }else if(input == "substract" || input == "-"){
        operate("-");
    }else if(input == "add" || input == "+"){
        operate("+");
    }else if(input == "equal" || input == "="){
        evaluate();
    }else if(input == "clear" || input == "c"){
        clearAll();
    }else if(input == "delete" || input == "Backspace"){
        deleteLatestDigit();
    }else if(input == "dark_mode" || input == "a"){
        dark();
    }else{
        return;
    }
}

function dark(){

}

function htmlCalc(cInput){
    if(currentOutput.textContent.charAt(0) == 0 && currentOutput.textContent.charAt(1) == ' ' && cInput == 0){
        return;
    }
    if(currentOutput.textContent == "0 "){
        currentOutput.textContent = ''; 
    }
    if(currentOutput.textContent.length == 14){  // Overflow Prevention
        return;
    }
    currentOutput.textContent += cInput;
   
}



function appendComma() {
    if(currentOutput.textContent.includes('.') || currentOutput.textContent == '0 '){
        return;
    }else{
        htmlCalc('.');
    }
}



function deleteLatestDigit() {
    currentOutput.textContent = currentOutput.textContent.slice(0,-1);
}



function operate(operator) {

    if(currentOperator !== null){
        evaluate();
    }
    firstNumber = currentOutput.textContent;
    currentOperator = operator;
    previousOutput.textContent = `${firstNumber} ${currentOperator}`;
    currentOutput.textContent = '';
}



function evaluate() {

    if (currentOperator === null){
        return;
    }
     secondNumber = currentOutput.textContent;
     currentOutput.textContent = finalCalc(firstNumber, secondNumber, currentOperator);
     previousOutput.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
     currentOperator = null;
}



function clearAll() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    currentOutput.textContent = '0 ';
    previousOutput.textContent = '';
}



function finalCalc(number1, number2, operator) {

    firstNumber = Number(number1);
    secondNumber = Number(number2);

    if(operator == "+") {
        final = firstNumber + secondNumber;
    }else if(operator == "-") {
        final = firstNumber - secondNumber;
    }else if(operator == "×") {
        final = firstNumber * secondNumber;
    }else if(operator == "÷") {
        final = firstNumber / secondNumber;
        if(secondNumber === 0) {
            return alert("You can't divide by 0");
        }
    }
    return parseFloat((final).toFixed(6));
}


// function dark() is intented to switch to Night Mode Calculator and it's currently not finished