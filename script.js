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






const operation = (element) => {
    let firstVal = inputScreen.innerHTML;

    if (firstVal === '0' && secondVal === 0){
        return;
    }
    if (firstVal !== '0' && secondVal === 0) {
                secondVal = firstVal;
                currentOpertor = element.innerHTML;    

    } else {
        if (firstVal == result){
            secondVal = result; 
            firstVal = 0;
        }
        switch(currentOpertor) {
            case '÷':
                firstVal = secondVal / firstVal;
                result = secondVal / firstVal;
                inputScreen.innerHTML = result;
                break;
            case 'x':
                firstVal = secondVal * firstVal;
                result = secondVal * firstVal;
                inputScreen.innerHTML = result;
                break;
            case '-':
                firstVal = secondVal - firstVal;
                result = secondVal - firstVal;
                inputScreen.innerHTML = result;
                break;
            case '+':
                firstVal = Number(secondVal) + Number(firstVal);
                result = Number(secondVal) + Number(firstVal);
                inputScreen.innerHTML = result;
                break;
        }
    }
}






//Calculator functions 


const inputNums = (e)  => {
    let input = e.innerHTML
    if (e.className === 'grey' || e.className === 'operator' || (input === '.' && inputScreen.innerHTML.includes('.'))){
        return;
    } else if (!inputScreen.innerHTML){
        console.log('works')
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