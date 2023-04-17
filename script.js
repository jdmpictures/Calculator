//Initalising variables 
let buttons = document.getElementsByTagName('span');
let inputScreen = document.getElementById('input-screen');


let operation = []; 


//Sets the time in the top left of the screen
const refreshTime = () => {
var time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time;
}
setInterval(refreshTime, 1000);


//Add the click events to the buttons 
window.onload = function()  {
for(let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === 'AC') {
        buttons[i].addEventListener("click", clear)    
    } 
    if (buttons[i].innerHTML === '+/-') {
        buttons[i].addEventListener("click", invert)    
    } 
    if (buttons[i].innerHTML === '%') { 
        buttons[i].addEventListener("click", perecent)  
    }
    if (buttons[i].innerHTML === '=') {
        buttons[i].addEventListener("click", equals)
    }
    if (buttons[i].innerHTML === 'c') {
        buttons[i].addEventListener("click", cancel)
    }  
    else {
        buttons[i].addEventListener("click", ()=> {
            if(buttons[i].className === 'grey' || buttons[i].className === 'operator' || buttons[i].className === 'clear grey') {
                return;
            }
            else if(inputScreen.innerHTML === '0') {
                inputScreen.textContent = '';
                inputScreen.textContent += buttons[i].textContent;
            } else {
                inputScreen.textContent += buttons[i].textContent;
            }

        });
            
    }
    }
  
}



//Calculator functions 

const clear = () => {
    inputScreen.textContent = "0";
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

const perecent = () => {
    inputScreen.textContent = inputScreen.textContent / 100;

}

const divide = () => {

}

const mutiply = () => {

}

const minus = () => {

}

const equals = () => {

}

const operate = (e)  => {
    console.log(e.textContent)
    }
