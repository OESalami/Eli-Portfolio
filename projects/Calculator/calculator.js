// LOADER
setTimeout( () => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block'; 
}, 3000);


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
