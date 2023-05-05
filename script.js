//Initalising variables 
const buttons = [...document.getElementsByTagName('span')];
const inputScreen = document.getElementById('input-screen');
const deleteButton = document.getElementById('clear');
const secondValScreen = document.getElementById('second-value')
let newNum =  true;
let currentOpertor = '';
let secondVal = 0; 
let result;

//Sets the time in the top left of the screen
const refreshTime = () => {
let time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time;
}
setInterval(refreshTime, 1000);

//Add the click events to the buttons 
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;
      switch (buttonText) {
        case "AC":
          clear();
          break;
        case "+/-":
          invert();
          break;
        case "%":
          percent();
          break;
        case "←":
          cancel();
          break;
        case "÷":
        case "x":
        case "-":
        case "+":
        case "=":
          operation(button);
          break;
        default:
          inputNums(button);
          break;
      }
    });
  });

const calculate = (element) => {
    console.log(currentOpertor, inputScreen.textContent, secondVal)
    newNum = true;
    switch(element) {
        case '÷':
            result = secondVal / inputScreen.textContent
            break;
        case 'x':
            result = secondVal * inputScreen.textContent;
            break;
        case '-':
            result = secondVal - inputScreen.textContent;
            break;
        case '+':
            result = Number(secondVal) + Number(inputScreen.textContent);
            break;
        case '=':
            console
            calculate(currentOpertor);
            break;
    }
    inputScreen.textContent = result;
    secondVal = result;

}

const operation =  (element) => {
    if (inputScreen.textContent == '0' && secondVal == 0){
        return;
    }
    if (inputScreen.textContent !== '0' && secondVal == 0)  {
                secondVal = inputScreen.textContent;
                currentOpertor = element.textContent;
                newNum = true;  
    } else  {
        newNum = true;
        if (element.textContent !== currentOpertor){
            calculate(currentOpertor);
            currentOpertor = element.textContent; 
        } else 
        calculate(element.textContent);
    }
    secondValScreen.textContent = secondVal + currentOpertor;
}

//Calculator functions 


const inputNums = (e)  => {
    if (e.className === 'grey' || e.className === 'operator' || (e.textContent === '.' && inputScreen.textContent.includes('.'))){
        return;
    } if (inputScreen.textContent == 0 || newNum === true){
        inputScreen.textContent = ''; 
        inputScreen.textContent += e.textContent;
        deleteButton.innerHTML = '&#8592;'
        newNum = false;
    } else {
        inputScreen.textContent += e.textContent;
        deleteButton.innerHTML = '&#8592;'
    }
}

const clear = () => {
    inputScreen.textContent = '0';
    secondVal = 0;
    result = 0;
    currentOpertor = '';
    newNum = true;
    secondValScreen.textContent = ''
}

const cancel = () => {
    let currentValue = inputScreen.textContent
    if(currentValue.length < 1) { 
        inputScreen.textContent = currentValue.slice(0, -1);
    } else {
        inputScreen.textContent = 0;
        deleteButton.textContent = 'AC'
    }  
}

const percent = () => {
    inputScreen.textContent /= 100;
}


const invert = () => {
    let input = inputScreen.textContent;
    if (input > 0 ) {
        inputScreen.textContent = "-" + input;   
    } else if (input.includes('-')){
        inputScreen.textContent = input.substring(1)
    }

}

const setButtonColour = (button) => {
    const activeOperator = [...document.getElementsByClassName('operator')];
    activeOperator.forEach(e => {
        if(e[i].textContent === button.textContent) {
            e[i].sty
        }
        
    });
}