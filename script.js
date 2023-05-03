//Initalising variables 
let buttons = [...document.getElementsByTagName('span')];
let inputScreen = document.getElementById('input-screen');
let newNum =  true;
let currentOpertor = '';
let secondVal = 0; 
let result = 0;



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
        if (element.innerHTML === '÷' || element.innerHTML === 'x' || element.innerHTML === '-' || element.innerHTML === '-' || element.innerHTML === '+' ){
            operation(element);
        }

        else {
            inputNums(element)
        }
        
    })
    
    
});


 function operation (element) {

    if (inputScreen.innerHTML == '0' && secondVal == 0){
        return;
    }
    if (inputScreen.innerHTML !== '0' && secondVal == 0 && element.innerHTML !== '=' )  {
                secondVal = inputScreen.innerHTML;
                currentOpertor = element.innerHTML;
                inputScreen.innerHTML = 0;
                newNum = true;  

    } else {
        if(secondVal == result){
            currentOpertor = element.innerHTML;
        }
        newNum = true;
        switch(currentOpertor) {
            case '÷':
                inputScreen.innerHTML = secondVal / inputScreen.innerHTML;
                result = inputScreen.innerHTML;
                currentOpertor = element.innerHTML;
                break;
            case 'x':
                inputScreen.innerHTML = secondVal * inputScreen.innerHTML;
                result = inputScreen.innerHTML;
                currentOpertor = element.innerHTML;
                break;
            case '-':
                inputScreen.innerHTML = secondVal - inputScreen.innerHTML;
                result = inputScreen.innerHTML;
                currentOpertor = element.innerHTML;
                break;
            case '+':
                inputScreen.innerHTML = Number(secondVal) + Number(inputScreen.innerHTML);
                result = inputScreen.innerHTML;
                currentOpertor = element.innerHTML;
                break;
            case '=':
                operation(currentOpertor);
        }
    }
}






//Calculator functions 


const inputNums = (e)  => {    
    console.log(e)
    if (e.className === 'grey' || e.className === 'operator' || (e.innerHTML === '.' && inputScreen.innerHTML.includes('.'))){
        return;
    } if (inputScreen.innerHTML == 0){
        inputScreen.innerHTML = ''; 
        inputScreen.innerHTML += e.innerHTML;
        newNum = false;     
    } else if (inputScreen.innerHTML == result){
        secondVal = result; 
        inputScreen.innerHTML = e.innerHTML;
    }
    else {
        inputScreen.innerHTML += e.innerHTML;
    }

}

const clear = () => {
    inputScreen.innerHTML = '0';
    secondVal = 0;
    result = 0;
    currentOpertor = '';
    operator = false;
}


const cancel = () => {
    if(inputScreen)inputScreen.innerHTML.slice(0, -1)

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





const equals = () => {

}