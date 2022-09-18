const currentOutput = document.getElementById("current_output");
const previousOutput = document.getElementById("previous_output");
let temp = "";
let temp2;
let temporaryFirstNumber;
let temporarySecondNumber;
let final;

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
        htmlCalc(".");
    }else if(input == "divide" || input == "/"){
        operationsCalc("/");
    }else if(input == "multiply" || input == "*"){
        operationsCalc("*");
    }else if(input == "substract" || input == "-"){
        operationsCalc("-");
    }else if(input == "add" || input == "+"){
        operationsCalc("+");
    }else if(input == "equal" || input == "="){
        operationsCalc("=");
    }else if(input == "clear" || input == "c"){
        operationsCalc(2);
    }else if(input == "delete" || input == "Backspace"){
        operationsCalc(2);
    }else if(input == "dark_mode" || input == "a"){
        htmlCalc(2);
    }else{
        return;
    }
}



function htmlCalc(cInput){
    temp2 = cInput.toString(10);
    temp += temp2;
    currentOutput.innerHTML = temp;
}



function operationsCalc(operation){

        temporaryFirstNumber = parseInt(currentOutput.innerHTML);
        console.log("First Number : ",temporaryFirstNumber);
        currentOutput.innerHTML = " ";
        temp = "";
       
        
        temporarySecondNumber = parseInt(previousOutput.innerHTML);
        if(temporarySecondNumber !== temporarySecondNumber){
            console.log("case 1");
            temporarySecondNumber = 0;
            previousOutput.innerHTML = temporaryFirstNumber;
        }else if (temporarySecondNumber == final){
            previousOutput.innerHTML = temporaryFirstNumber;
            console.log("case 2");
        }else{
            previousOutput.innerHTML = temporaryFirstNumber;
            console.log("case 3");
        }



        console.log("Second Number : ",temporarySecondNumber);

        
        if(operation == "+"){
            finalCalc(temporaryFirstNumber,temporarySecondNumber,1);
        }else if(operation =="-"){
            finalCalc(temporaryFirstNumber,temporarySecondNumber,2);
        }else if(operation =="/"){
            finalCalc(temporaryFirstNumber,temporarySecondNumber,3);
        }else if(operation =="*"){
            finalCalc(temporaryFirstNumber,temporarySecondNumber,4);
        }else if(operation == "="){
            finalCalc(temporaryFirstNumber,temporarySecondNumber,5);
        }
}



function finalCalc(number1, number2, operation){
    if ( number2 == 0){
        if( operation == 1){
            previousOutput.innerHTML = temporaryFirstNumber + "+";
            lastOperation = operation;
        }else if ( operation == 2){
            previousOutput.innerHTML = temporaryFirstNumber + "-";
            lastOperation = operation;
        }else if ( operation == 3){
            previousOutput.innerHTML = temporaryFirstNumber + "/";
            lastOperation = operation;
        }else if ( operation == 4 ){
            previousOutput.innerHTML = temporaryFirstNumber + "*";
            lastOperation = operation;
        }
    }else{
        if( operation == 1){
            final = number1 + number2;
        }else if ( operation == 2){
            final = number1 - number2;
        }else if ( operation == 3){
            final = number / number2;
        }else if ( operation == 4 ){
            final = number1 * number2;
        }else if ( operation == 5){
            if (lastOperation == 1){
                previousOutput.innerHTML = temporarySecondNumber + "+" + temporaryFirstNumber;
                final = temporarySecondNumber + temporaryFirstNumber;
            }else if (lastOperation == 2){
                previousOutput.innerHTML = temporarySecondNumber + "-" + temporaryFirstNumber;
                final = temporarySecondNumber - temporaryFirstNumber;
            }else if (lastOperation == 3){
                previousOutput.innerHTML = temporarySecondNumber + "/" + temporaryFirstNumber;
                final = temporarySecondNumber / temporaryFirstNumber;
            }else if (lastOperation == 4){
                previousOutput.innerHTML = temporarySecondNumber + "*" + temporaryFirstNumber;
                final = temporarySecondNumber * temporaryFirstNumber;
            }
            temporarySecondNumber = 0;
            temporaryFirstNumber = 0;
            number1 = 0;
            number2 = 0;
            
        }
        currentOutput.innerHTML = final;
    }
    console.log("Final number : ",final);

}