//Initalising variables 
let buttons = document.getElementsByTagName('span');
let inputScreen = document.getElementById('input-screen')

//Sets the time in the top left of the screen
const refreshTime = () => {
var time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time;
}
setInterval(refreshTime, 1000);


//Gets values of buttons and calls revelant function
window.onload = function()  {
for(let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === 'AC') {
        buttons[i].addEventListener("click", clear)    
    } 
}
}

const clear = () => {
    inputScreen.textContent = "0"

}