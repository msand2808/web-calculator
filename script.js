import { evaluate } from "https://cdn.jsdelivr.net/npm/mathjs@12.4.0/+esm";


let expression = "";

document.addEventListener('DOMContentLoaded', () => {

    const Expressionh2 = document.querySelector("#Expression");
    
    let numberButtons = [];   
    numberButtons[0] = document.querySelector("#btn0");
    numberButtons[1] = document.querySelector("#btn1");
    numberButtons[2] = document.querySelector("#btn2");
    numberButtons[3] = document.querySelector("#btn3");
    numberButtons[4] = document.querySelector("#btn4");
    numberButtons[5] = document.querySelector("#btn5");
    numberButtons[6] = document.querySelector("#btn6");
    numberButtons[7] = document.querySelector("#btn7");
    numberButtons[8] = document.querySelector("#btn8");
    numberButtons[9] = document.querySelector("#btn9");

    const btnSum = document.querySelector("#btnSum");

    const btnEqual = document.querySelector("#btnEqual");
    
    for(let i = 0; i<10; i++){
        numberButtons[i].addEventListener('click', (evt)=>{
            evt.preventDefault();

            expression += i;

            Expressionh2.textContent = expression;

        })
    }

    btnSum.addEventListener('click', (evt)=>{
        evt.preventDefault();

        expression +='+';

        Expressionh2.textContent = expression;
    });


    btnEqual.addEventListener('click', (evt) =>{
        evt.preventDefault();
        const result = evaluate(expression);
        Expressionh2.textContent = result;
    });

});