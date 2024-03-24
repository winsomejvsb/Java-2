const minNum = 20;
const maxNum = 50;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true

while(running){
    console.log(answer);
    guess = window.prompt(`Guess a Number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.prompt("Please this is not a number");
    }
    else if(guess < minNum || guess > maxNum){
        window.prompt("Please Enter a Valid Number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.prompt("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.prompt("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert("CORRECT!")

            
        }
    }
    
    running = false;
}