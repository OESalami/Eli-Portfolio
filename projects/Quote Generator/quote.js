// LOADER
setTimeout( () => {
    const loader = document.getElementById('loader').style.display = 'none';
    const main = document.getElementById('main').style.display = 'block'; 
}, 3000);


// Let's define our variables
const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

// Let's create an array for the quotes
const quote = [
    `"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn."  -Stephen Hawking`,

    `"Everybody should learn to program a computer, because it teaches you how to think."  -Steve Jobs`,

    `"I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12."  -Elon Musk`,

    `"All of my friends who have younger siblings who are going to college or high school - my number one piece of advice is: You should learn how to program."  -Mark Zuckerberg`,

    `"I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user."  -Bill Gates`,

    `"Failure is an option here. If things are not failing, you are not innovating enough." -Elon Musk`,

    `"Your most unhappy customers are your greatest source of learning."  -Bill Gates`
];

generateButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quote.length);
    quoteElement.textContent = quote[randomIndex];

    console.log(quoteElement);
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteElement.textContent)
    .then( () => {
        alert("Copied to clipboard");
    });
});