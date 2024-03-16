let maximum = parseInt(prompt("Enter the maximum number!"));

while(!maximum) {
    maximum = parseInt(prompt("Please enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if(guess === 'q') break; // added this line to allow user to quit the game by entering 'q'
    guess = parseInt(guess);    
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess!");
        attempts++;
    } else if(guess < targetNum) {
        guess = prompt("Too low! Enter a new guess!");
        attempts++;
    } else {
        guess = prompt("Invalid guess! Enter a new guess! (Type 'q' to quit)");
    }
}

if(guess === 'q') {
    console.log("OK, you quit the game!");
}
else
{
    console.log(`You got it! It took you ${attempts} guesses!`);    
}
