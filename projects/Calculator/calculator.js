
const display = document.getElementById("input");

function render(input){
    display.value += input;
}
function clearAll(){
    display.value = '';
}
function clearSingle() {
    display.value = display.value.toString().slice(0,-1);
}
function finalAnswer(){
    display.value = eval(display.value);
}
