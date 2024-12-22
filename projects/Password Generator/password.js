// const Length = prompt("Enter number of characters (5 - 10)");
 
// if (Length.value >= 5 && Length.value <= 10) {
//     let password = "";
//     for (let i = 0; i < Length; i++) {
//         password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//         password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//         password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//     }
//     console.log(password);
// } else {
//     alert("thanks");
// }


// let input = prompt("number of letters");

  
// if (isNaN(input) || input === ""){
//     input = prompt("Your input is not a number. Please enter a number");
// } else if (!isNaN(input)) {
//     generatePassword(input);
// }

// function generatePassword(input) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

//     let password = '';
  
  
//     for (let i = 0; i < length; i++) {
//       password += characters.charAt(Math.floor(Math.random() * characters.input));
//     } 
//      return password;
// }
// console.log(generatePassword(input));


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


// function generatePassword () {
    
//     //Ask the desired password length
//     let length = prompt("Enter the desired password length");
//     length = parseInt(length);

//     //salValidate the input
//     while (isNaN(length) || length === ""){
//         length = prompt("Your input was invalid, Please enter valid number");
//     }

        
//     //Ask for the type of characters to include
//     let specialChar = confirm("Would you like special characters to be included in the password?");

//     //Define the characters
//     const uppercase = "abcdefghijklmnopqrstuvwxyz";
//     const lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbers = "0123456789";
//     const specialCharacter = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~_\\";
    
//     //Combine the characters base on the user preferences
//     let characters = lowercase + uppercase + numbers;

//     if (specialChar){
//         characters += specialCharacter;
//     }

//     //Generate Password
//     let password = "";
//     for (let i = 0; i < length; i++) {
//         const randomPassword = Math.floor(Math.random()*characters.length);
//             password += characters[randomPassword];
//         }

//         //Display the Password
//         alert("Generated Password:" + password);
// }
//     generatePassword();

