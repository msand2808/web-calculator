import { evaluate } from "https://cdn.jsdelivr.net/npm/mathjs@12.4.0/+esm";


let expression = "";
let ans = 0;
let clicked = false;

document.addEventListener('DOMContentLoaded', () => {

    const Expressionh2 = document.querySelector("#Expression");
    
    //buttons of every number
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

    //buttons of every operation
    const btnSum = document.querySelector("#btnSum");
    const btnSub = document.querySelector("#btnSub");
    const btnMul = document.querySelector("#btnMul");
    const btnDiv = document.querySelector("#btnDiv");

    //extra functions
    const btnAns = document.querySelector("#btnAns");
    const btnClear = document.querySelector("#btnClear");
    const btnParOpen = document.querySelector("#btnParOpen");
    const btnParClose = document.querySelector("#btnParClose");
    const btnBack = document.querySelector("#btnBack");
    
    const btnEqual = document.querySelector("#btnEqual");
    
    for(let i = 0; i<10; i++){
        numberButtons[i].addEventListener('click', (evt)=>{
            evt.preventDefault();

            if(!clicked){
                Expressionh2.textContent = "";
            }
            clicked = true;

            expression += i;

            Expressionh2.textContent += i;

        })
    }

    btnSum.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression +='+';

        Expressionh2.textContent += '+';
    });

    btnSub.addEventListener('click', (evt)=>{
        evt.preventDefault();
        

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression += '-';
        Expressionh2.textContent += '-';
    });

    btnMul.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression += '*';
        Expressionh2.textContent += '*';
    });

    btnDiv.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression += '/';
        Expressionh2.textContent += '/';
    })

    btnEqual.addEventListener('click', (evt) =>{
        evt.preventDefault();
        
         if(!clicked){
            return;
        }
        
        const result = evaluate(expression);
        expression = result;

        if(typeof(result) == "number"){
            ans = result;
        }else{
            ans = 0;
        }

        Expressionh2.textContent = result;

        //clicked = false;
    });

    btnAns.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        if(Expressionh2.textContent[Expressionh2.textContent.length-1] >= '0' && Expressionh2.textContent[Expressionh2.textContent.length-1] <= '9'){
            expression += `*${ans}`;
            Expressionh2.textContent += '*Ans';
            return;
        }

        expression += ans;
        Expressionh2.textContent += 'Ans';
    });

    btnClear.addEventListener('click', (evt)=>{
        evt.preventDefault();
        Expressionh2.textContent = "Type an Expression:";
        expression = "";
        clicked = false;
    });

    btnParOpen.addEventListener('click', (evt) =>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression += '(';
        Expressionh2.textContent += '(';

    });

    btnParClose.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(!clicked){
            Expressionh2.textContent = "";
        }
        clicked = true;

        expression += ')';
        Expressionh2.textContent += ')';

    });

    btnBack.addEventListener('click', (evt)=>{
        evt.preventDefault();

        if(Expressionh2.textContent.trim() == "Type an Expression:"){
            return;
        }

        if(Expressionh2.textContent[Expressionh2.textContent.length - 1] == 's'){
            Expressionh2.textContent = Expressionh2.textContent.slice(0, -3);

            Expressionh2.textContent += ans;

        }else{
            expression = expression.slice(0, -1);
            Expressionh2.textContent = Expressionh2.textContent.slice(0,-1);

            if(Expressionh2.textContent.trim() == ""){
                Expressionh2.textContent = "Type an Expression:";
                clicked = false;
            }
        }

    });

});