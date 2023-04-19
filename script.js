//Initalising variables 
let buttons = [...document.getElementsByTagName('span')];
let inputScreen = document.getElementById('input-screen');
let operator =  false;
let operatorValue;
let secondVal = '0'; 
let operation = []; 


//Sets the time in the top left of the screen
const refreshTime = () => {
var time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time;
}
setInterval(refreshTime, 1000);


//Add the click events to the buttons 

buttons.forEach(element => { 
    element.addEventListener('click', () => {
        if (element.innerHTML === 'AC'){
            clear();
        }
        if (element.innerHTML === '+/-'){
            invert();
        }
        if (element.innerHTML === '%'){
            percent();
        }
        if (element.innerHTML === '%'){
            percent();
        }
        if (element.innerHTML === 'c'){
            cancel();
        }
        if (element.innerHTML === '÷'){
            divide(element);
        }
        else {
            inputNums(element)
        }
        
    })
    
    
});

// function button()  {
// for(let i = 0; i < buttons.length; i++) {
//     if (buttons[i].innerHTML === 'AC') {
//         buttons[i].addEventListener("click", clear)    
//     } 
//     if (buttons[i].innerHTML === '+/-') {
//         buttons[i].addEventListener("click", invert)    
//     } 
//     if (buttons[i].innerHTML === '%') { 
//         buttons[i].addEventListener("click", perecent)  
//     }
//     if (buttons[i].innerHTML === 'c') {
//         buttons[i].addEventListener("click", cancel)
//     }  
//     else {
//         buttons[i].addEventListener("click", operate(i))
            
//     }
//     }
  
// }



//Calculator functions 


const inputNums = (element)  => {

    if (element.className === 'grey' || element.className === 'operator' || (element.innerHTML === '.' && inputScreen.innerHTML.includes('.')  )){
        return;
    }
    if (inputScreen.innerHTML === '0' && operator === false){
        inputScreen.innerHTML = '';
        inputScreen.innerHTML += element.innerHTML;
     } 
    else {
        inputScreen.innerHTML += element.innerHTML;
    }

}
    
    


const clear = () => {
    inputScreen.textContent = '0';
    secondVal = '0'
}


const cancel = () => {

}
const invert = () => {
    let input = inputScreen.textContent;
    if (input > 0 ) {
        inputScreen.textContent = "-" + input;   
    } 
    if (input.includes('-')){
        inputScreen.textContent = input.substring(1)
    }

}

const percent = () => {
    inputScreen.textContent /= 10;
}

const divide = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        return;
    } else if (inputScreen.innerHTML !== '0' && secondVal === '0') {
        secondVal = inputScreen.innerHTML;
        inputScreen.innerHTML = '0';
        operatorValue += element.innerHTML;

    } else {
        inputScreen.innerHTML = secondVal / inputScreen.innerHTML;
    }


}

const sum = (a, b) => {
    return a + b; 

}


const mutiply = () => {

}

const minus = () => {

}

const equals = () => {

}