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
  
      if (button.className !== 'operator') {
        highlightButton(button);
      } else {


      }
      
      

    });
  });

  const highlightButton = (button) => {
    button.style.backgroundColor = 'white'; // set highlight color
    button.style.transition = 'background-color 0.2s ease'; // set transition duration and easing
    setTimeout(() => {
      button.style.backgroundColor = ''; // reset to original color after 0.2s
    }, 200);
  }




const highlightOperator  = (btn) => {
    if(btn.textContent !== currentOpertor && btn.className === 'operator') {
      btn.style.backgroundColor = '#FF9500'
      btn.style.color = 'white'
    } if(btn.textContent === currentOpertor && btn.className === 'operator') {
      btn.style.backgroundColor = 'white'
      btn.style.color = '#FF9500' 
    }
  }
  

  


const calculate = (element) => {
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
    
    inputScreen.textContent = result;
    secondVal = result;

}

const operation =  (element) => {
  highlightOperator(element)
    if (inputScreen.textContent == '0' && secondVal == 0){
        return;
    }
    if (inputScreen.textContent !== '0' && secondVal == 0)  {
                secondVal = inputScreen.textContent;
                currentOpertor = element.textContent;
                newNum = true;  
    } else  {
        newNum = true;
      if (element.textContent !== currentOpertor && element.textContent !== '=' && newNum){
            calculate(currentOpertor);
            currentOpertor = element.textContent; 
        } else 
        calculate(element.textContent);
    }
    secondValScreen.textContent = secondVal + currentOpertor;
}

//Calculator functions 

const inputNums = (e) => {
    const buttonText = e.textContent.trim();
    const invalidInputPattern = /^(\.|\d.*\.)$/;
    
    if (invalidInputPattern.test(buttonText)) {
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
        inputScreen.textContent = "-" + input;   
    } else if (input.includes('-')){
        inputScreen.textContent = input.substring(1)
    }

};



// const setButtonColour = (element) => {
//   console.log(element.textContent)
//   // console.log(button)

//   };



