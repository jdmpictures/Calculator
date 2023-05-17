//Initalising variables 
const buttons = [...document.getElementsByTagName('span')];
const inputScreen = document.getElementById('input-screen');
const operators = [...document.getElementsByClassName('operator')];
const deleteButton = document.getElementById('clear');
const secondValScreen = document.getElementById('second-value');
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

//Add the click events to the buttons and runs relevant functions
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
      if(button.className !== 'operator') {
        highlightButton(button)
      }
      highlightOperator();

    });
  });
// test
  //Stylising Functions 

  //Temporarily highlight a button that is pressed
  const highlightButton = (button) => {
    button.style.backgroundColor = 'white'; // set highlight color
    button.style.transition = 'background-color 0.2s ease'; // set transition duration and easing
    setTimeout(() => {
      button.style.backgroundColor = ''; // reset to original color after 0.2s
    }, 200);
  
  }

  //Highlights the operator that is currently active 

  const highlightOperator = () => {
    operators.forEach((btn) => {
      if (btn.textContent === currentOpertor && btn.classList.contains('operator')) {
        btn.style.backgroundColor = 'white';
        btn.style.color = '#FF9500';
      } else {
        btn.style.backgroundColor = ''; // Reset to default background color
        btn.style.color = ''; // Reset to default text color
      }
    });
  };

//Functions to handle calculations and number input

const operation =  (element) => {
  if (inputScreen.textContent == '0' && secondVal == 0){ // If no number input then return
      return;
  }
  if (inputScreen.textContent !== '0' && secondVal == 0 && element.textContent !== '=')  { // pushes firstval to second val 
              secondVal = inputScreen.textContent;
              currentOpertor = element.textContent;
              newNum = true;  
  } else  {
    if (element.textContent !== currentOpertor && element.textContent !== '='){
          calculate(currentOpertor);  
          currentOpertor = element.textContent; 
       } else {
        calculate(currentOpertor)
      }
  }
  secondValScreen.textContent = secondVal + ' ' + currentOpertor;
}

//Checks the operator and carrys out the appropriate function 
const calculate = (element) => {
  if(newNum === true && element !== '='){
    return;
  }
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
            calculate(currentOpertor);
            currentOpertor = '';
            break;
    }
    if (isNaN(result) || !isFinite(result)) {
      inputScreen.textContent = 'Silly Billy';
    } else {
      inputScreen.textContent = result;
      secondVal = result;
    }
}

//other Calculator functions 

const inputNums = (e) => {
    const buttonText = e.textContent.trim();
    if(buttonText === '.' && inputScreen.textContent.includes('.')){
      return;
    }
  
    inputScreen.textContent = (inputScreen.textContent === '0' || newNum) ? buttonText : inputScreen.textContent + buttonText;
    deleteButton.innerHTML = '&#8592;'
    newNum = false;
  };

const clear = () => {
    inputScreen.textContent = '0';
    secondVal = 0;
    result = 0;
    currentOpertor = '';
    newNum = true;
    secondValScreen.textContent = ''
};

const cancel = () => {
    let currentValue = inputScreen.textContent
    if(currentValue.length > 1) { 
        inputScreen.textContent = currentValue.slice(0, -1);
    } else {
        inputScreen.textContent = 0;
        deleteButton.textContent = 'AC'
    }  
};

const percent = () => {
    inputScreen.textContent /= 100;
};


const invert = () => {
    let input = inputScreen.textContent; // Sets current input screen value to 
    if (input > 0 ) { 
        inputScreen.textContent = "-" + input;  //If value is more than 0 then add '-'
    } else if (input.includes('-')){
        inputScreen.textContent = input.substring(1) //If '-' is already present then remove it
    }

};

//KEYPAD input functions

// Add event listener to handle key presses
document.addEventListener('keydown', handleKeyPress);

// Function to handle key presses
function handleKeyPress(event) {
  console.log(event.key)
  const key = event.key;

  // Check if the pressed key is a number from the number pad
  if (/^[0-9]$/.test(key)) {
    const button = getButtonByKey(key);
    if (button) {
      inputNums(button);
      highlightButton(button);
    }
  }
  
  // Check if the pressed key is an operator key
  if (/^[+*/\-=%]$/.test(key) || key === 'Enter' || key === 'Backspace') {
    const button = getOperatorButtonByKey(key);
    if (button) {
      operation(button);
      highlightButton(button);
    }
  }
}
// Function to retrieve the operator button element corresponding to the pressed key
function getOperatorButtonByKey(key) {
  switch (key) {
    case '+':
      return buttons.find((button) => button.textContent === '+');
    case '-':
      return buttons.find((button) => button.textContent === '-');
    case '*':
      return buttons.find((button) => button.textContent === 'x');
    case '/':
      return buttons.find((button) => button.textContent === '÷');
    case '%':
      return buttons.find((button) => button.textContent === '%');
    case '=':
    case 'Enter':
      return buttons.find((button) => button.textContent === '=');
    case 'Backspace':
      cancel(); 
    default:
      return null;
  }
}

function getButtonByKey(key) {
  return buttons.find((button) => button.textContent === key);
}