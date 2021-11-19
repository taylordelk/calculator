function add(a,b){
    let sum;
    let anum=Number(a);
    let bnum=Number(b);
    sum=anum+bnum;
    return sum;
}
function subtract(a,b){
    let diff;
    let anum=Number(a);
    let bnum=Number(b);
    diff=anum-bnum;
    return diff;
}
function multiply(a,b){
    let product;
    let anum=Number(a);
    let bnum=Number(b);
    product=anum*bnum;
    return product;
}
function divide(a,b){
    let quotient;
    let anum=Number(a);
    let bnum=Number(b);
    quotient=anum/bnum;
    if(bnum===0){quotient='Nice try, ya dingus. You can\'t divide by zero.'}
    return quotient;
}
function equalsfunct(){
    console.log('equals');
    secondnumber=Number(display);
    display=operate(operator,storednum,secondnumber);
    displayitem.textContent=display;
    i=0;
}
function operate(op,num1,num2){
    let result;

    switch(op){
        case '+':
            result=add(num1,num2);
            break;
        case '-':
            result=subtract(num1,num2);
            break;
        case '*':
            result=multiply(num1,num2);
            break;
        case '/':
            result=divide(num1,num2);
            break;
        default:
            result='ERROR';
    }
    return result;
}

//initialize display variable
let display='';
//grab display box
const displayitem=document.querySelector('.display');
//grab numbers
const numbers=document.querySelectorAll('.num');
//add number functionality
numbers.forEach(b=>b.addEventListener('click', function(e){
    display=display+e.target.textContent;
    displayitem.textContent=display;
})
)
let storednum;
let operator;
//grab operators
const operators=document.querySelectorAll('.ops');
//add operator functionality and keep track of number of operators
let i=0;
operators.forEach(b=>b.addEventListener('click',function(e){
    if(i>0){
        equalsfunct();
    }
    storednum=Number(display);
    display='';
    operator=e.target.textContent;
    i++;
}))
let secondnumber;
//grab equals sign
const equals=document.getElementById('equals');
//add equals sign functionality

equals.addEventListener('click',function(e){
    secondnumber=Number(display);
    display=operate(operator,storednum,secondnumber);
    displayitem.textContent=display;
    i=0;
})

//grab clear
const clear=document.querySelector('.clear');
//add clear functionality
clear.addEventListener('click',function(e){
    display='';
    secondnumber=null;
    storednum=null;
    operator=null;
    displayitem.textContent=display;
    i=0;
})
