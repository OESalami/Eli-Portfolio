 // LOADER
setTimeout( () => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block'; 
}, 3000);
 
 // DOM elements
 const playerScore = document.getElementById('player-score');
 const computerScore = document.getElementById('computer-score');
 const resultModal = document.getElementById('result-modal');
 const resultMessage = document.getElementById('result-message');
 const continueBtn = document.getElementById('continue-btn');
 const resetBtn = document.getElementById('reset-btn');
 
 // Choices
 const choices = {
     rock: '✊',
     paper: '🤚',
     scissors: '✌️'
 };
 
 
 // Retrieve stored scores from localStorage
 let playerScoreValue = parseInt(localStorage.getItem('playerScore')) || 0;
 let computerScoreValue = parseInt(localStorage.getItem('computerScore')) || 0;
 
 // Initialize the score display from localStorage
 playerScore.textContent = playerScoreValue;
 computerScore.textContent = computerScoreValue;
 
 
 // Event listeners for player choices
 document.getElementById('rock').addEventListener('click', () => playGame('rock'));
 document.getElementById('paper').addEventListener('click', () => playGame('paper'));
 document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
 
 // Function to play the game
 function playGame(playerChoice) {
     const computerChoice = getComputerChoice();
     const result = determineWinner(playerChoice, computerChoice);
 
     updateScores(result);
     showModal(result, playerChoice, computerChoice);
 
     setTimeout(() => {
         resultModal.style.display = 'none';
     }, 2000); // Show result for 10 seconds
 }
 
 // Get computer's choice randomly
 function getComputerChoice() {
     const choicesArray = Object.keys(choices);
     const randomIndex = Math.floor(Math.random() * 3);
     return choicesArray[randomIndex];
 }
 
 // Determine winner
 function determineWinner(playerChoice, computerChoice) {
     if (playerChoice === computerChoice) {
         return 'tie';
     }
 
     if (
         (playerChoice === 'rock' && computerChoice === 'scissors') ||
         (playerChoice === 'paper' && computerChoice === 'rock') ||
         (playerChoice === 'scissors' && computerChoice === 'paper')
     ) {
         return 'player';
     } else {
         return 'computer';
     }
 }
 
 // Update scores
 function updateScores(result) {
     if (result === 'player') {
         playerScoreValue++;
         playerScore.textContent = playerScoreValue;
         localStorage.setItem('playerScore', playerScoreValue); // Store player score
     } else if (result === 'computer') {
         computerScoreValue++;
         computerScore.textContent = computerScoreValue;
         localStorage.setItem('computerScore', computerScoreValue); // Store computer score
     }
 }
 
 // Show result in modal
 function showModal(result, playerChoice, computerChoice) {
     let message = '';
 
     if (result === 'tie') {
         message = `It's a tie! Both chose ${choices[playerChoice]}`;
     } else if (result === 'player') {
         message = `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
     } else {
         message = `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
     }
 
     resultMessage.textContent = message;
     resultModal.style.display = 'flex';
 }
 
 // Continue button functionality
 
 continueBtn.addEventListener('click', () => {
     resultModal.style.display = 'none';
 });
 
 // Reset button functionality
 resetBtn.addEventListener('click', () => {
     playerScoreValue = 0;
     computerScoreValue = 0;
     playerScore.textContent = playerScoreValue;
     computerScore.textContent = computerScoreValue;
     localStorage.setItem('playerScore', playerScoreValue); // Reset player score in localStorage
     localStorage.setItem('computerScore', computerScoreValue); // Reset computer score in localStorage
     resultModal.style.display = 'none';
 });
 