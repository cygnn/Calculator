const mainContainer = document.querySelector('.main-container');
const calculator = document.querySelector('.calculator');
let disp = document.querySelector(".display");
const btns = document.querySelector('.buttons');
const nums = document.querySelector(".nums");
const oprtr = document.querySelector('.operators');

let term1;
let operator;
let term2;

function operate(operator, term1, term2){
    switch(operator){
        case '+': return add(term1,term2);
        case '-': return subtract(term1,term2);
        case '*': return multiply(term1, term2);
        case '/': return divide(term1,term2);
    }
}

function add(a,b){
    let c= a+b
    return c
}
function subtract(a,b){
    let c= a-b
    return c
}
function multiply(a,b){
    let c= a*b
    return c
}
function divide(a,b){
    let c= a/b
    return c
}

function splitter(str){
    let arr = str.split(' ');
    let a = arr[1];
    let b = arr[0];
    let c = arr[2];
    
    return operate(a,+b,+c)
}

nums.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        let value = e.target.textContent;
        if(value === '.'){
            if(!disp.textContent.includes('.')){
                display(value);
            }
            else{
                console.log('nono')
            }
        }
        else{
            display(value)
        }
        
    }
});


oprtr.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        display(" " + e.target.textContent + " ")
    }
})

document.addEventListener('keypress', (e) => {
    if(isOperator(" " + e.key + " ")){
        display(" " + e.key + " ")
    }
    else if (!isNaN(parseInt(e.key, 10))) {
        display(e.key);
    } else {
        console.log('nono');
    }
});

function isOperator(symbol){
    if (symbol === ' + ' ||symbol === ' - ' ||symbol === ' * ' ||symbol === ' / ' ||symbol === ' = '){
        return true
    }
    else{
        return false
    }    
}



function display(value){
    if(value === ' AC '){
        disp.textContent = ''
    }
    else if(value ===' CE '){
        disp.textContent = disp.textContent.slice(0,-1);
    }
    else if(value === ' = '){
        let test = disp.textContent.split(' ')
        if(test.length === 3){
            disp.textContent = splitter(disp.textContent)
        }      
    }
    else if(isOperator(value)){
        let test = disp.textContent.split(' ')
        if(test.length === 3){
            disp.textContent = splitter(disp.textContent) + value
        }
        else{
            disp.textContent += value;
        }
    }
    else{
        disp.textContent += value;
    }
}


calculator.appendChild(disp);
calculator.appendChild(btns);
btns.appendChild(nums);
btns.appendChild(oprtr);
mainContainer.appendChild(calculator);
