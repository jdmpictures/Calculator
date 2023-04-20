//Initalising variables 
let buttons = [...document.getElementsByTagName('span')];
let inputScreen = document.getElementById('input-screen');
let operator =  false;
let currentOpertor;
let secondVal = 0; 



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
        if (element.innerHTML === 'c'){
            cancel();
        }
        if (element.innerHTML === '÷'){
            divide(element);
        }
        if (element.innerHTML === 'x'){
            mutiply(element);
        }
        if (element.innerHTML === '-'){
            minus(element);
        }
        if (element.innerHTML === '+'){
            sum(element);
        }
        else {
            inputNums(element)
        }
        
    })
    
    
});


const operation = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        return;
    }
    if(currentOpertor !== element.innerHTML){
        switch(currentOpertor) { 
            case '÷':
                console.log('works')
                break;
            case 'x':
                console.log('works')
                break;
            case '-':
                console.log('works')
                break;
            case '+':
                console.log('works')
                break;
        }
    }

}


//Calculator functions 


const inputNums = (element)  => {

    if (element.className === 'grey' || element.className === 'operator' || (element.innerHTML === '.' && inputScreen.innerHTML.includes('.'))){
        return;
    }
    else if (inputScreen.innerHTML === '0' || operator === true ){
        operator = false;
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
    else if (input.includes('-')){
        inputScreen.textContent = input.substring(1)
    }

}

const percent = () => {
    inputScreen.textContent /= 100;
}

const divide = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        alert('MORON')
        return;
    } else if (inputScreen.innerHTML !== '0' && secondVal === '0') {
        operator = true;
        secondVal = inputScreen.innerHTML;
        // operatorValue += element.innerHTML;

    } else {
        inputScreen.innerHTML = secondVal / inputScreen.innerHTML;
        operator = true;7
    }        
    }







const mutiply = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        return;
    } else if (inputScreen.innerHTML !== '0' && secondVal === '0') {
        operator = true;
        secondVal = inputScreen.innerHTML;
        operatorValue += element.innerHTML;

    } else {
        inputScreen.innerHTML = secondVal * inputScreen.innerHTML;
        operator = true;
    }

}

const minus = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        return;
    } else if (inputScreen.innerHTML !== '0' && secondVal === '0') {
        operator = true;
        secondVal = inputScreen.innerHTML;
        operatorValue += element.innerHTML;

    } else {
        inputScreen.innerHTML = secondVal - inputScreen.innerHTML;
        operator = true;
    }

}

const sum = (element) => {
    if (inputScreen.innerHTML === '0' && secondVal === '0') {
        return;
    } else if (inputScreen.innerHTML !== '0' && secondVal === '0') {
        operator = true;
        secondVal = inputScreen.innerHTML;
        operatorValue += element.innerHTML;

    } else {
        inputScreen.innerHTML += secondVal;
        operator = true;
    }

}







const equals = () => {

}