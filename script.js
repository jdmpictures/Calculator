const refreshTime = () => {
var time = new Date().toLocaleTimeString()
document.getElementById("time").textContent = time;
}
setInterval(refreshTime, 1000);

const buttons = document.getElementsByTagName("span")


for(i = 0; i < buttons.length; i++) {
    if(buttons[i].innerHTML === '=') {
        buttons[i].addEventListener("click", console.log('boom'))
    }
}
