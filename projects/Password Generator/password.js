
// LOADER
setTimeout( () => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block'; 
}, 3000);


// MAIN CONTENT CODE
const input = document.getElementById('password');
const lengthInput = document.querySelector('.length');
const specialBox = document.getElementById('checkbox1');
const numBox = document.getElementById('checkbox2');
const generate = document.getElementById('generate');
const copy = document.getElementById('copy');

    //When clicked on the Generate button
generate.addEventListener('click', () => {
    let length = parseInt(lengthInput.value);

     //Define the characters
     const uppercase = "abcdefghijklmnopqrstuvwxyz";
     const lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numbers = "0123456789";
     const specialCharacter = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~_\\";
    
     //Let's combine the characters
     let characters = uppercase + lowercase;

     //Let's check if the checkboxes are checked
     if (specialBox.checked) {
        characters += specialCharacter;
     }
     if (numBox.checked) {
        characters += numbers;
     }

    // Let's generate the password
     let password = "";

     for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }

    //Let's render the password into the input box
        input.value = password;
});

    //Let's copy the password
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)
        .then (() => {
            alert("Password copied to clipboard!")
        });
});

