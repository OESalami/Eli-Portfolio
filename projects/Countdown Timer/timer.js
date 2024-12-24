// LOADER
setTimeout( () => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block'; 
}, 3000);



const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const interval = null;

startButton.addEventListener('click', () => {
        interval = setInterval(() => {
            if (hours.value == 0 && minutes.value == 0 && seconds.value == 0){
                return;
            }
            else if (seconds.value != 0){
                seconds.value --;
            } 
            else if(minutes.value != 0 && seconds.value == 0){
                minutes.value --;
                seconds.value = 59; 
            } 
            else if (hours.value != 0){
                hours.value--;
                minutes.value = 60;
            }
         }, 1000);
});

stopButton.addEventListener('click', () => {
    interval = clearInterval(interval);

    if (stopButton.textContent === "Stop"){
        stopButton.textContent = "Resume";
    } 
    else {
        stopButton.textContent = "Stop";
    }
});

resetButton.addEventListener('click', () => {
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
});