let maxNumber = 9;
let randomNumber = Math.floor(Math.random() * maxNumber);
let totalPrize = 0;
let maxPrize = 100;
let attempts = 3;


let result = confirm('Do you want to play a game?');
if (result===false) {
    alert('You did not become a billionaire, but can.');
} else if (result===true) {
    let guestNumber1 = +prompt('Choose a roulette pocket number from 0 to 8\nAttempts left: '+attempts+'\nTotal prize: '
    +totalPrize+'$\nPossible prize on current attempt: '+maxPrize+'$');
    if (guestNumber1!==randomNumber) {
        alert('Thank you for your participation. Your prize is: '+totalPrize+'$');
        confirm('Do you want to play again?');
    } else if (guestNumber1===randomNumber) {
        let result = alert('Congratulation, you won! Your prize is: '+totalPrize+'$. Do you want to continue?’');
        if (result===false) {
            alert('Thank you for your participation. Your prize is: '+totalPrize+'$');
            confirm('Do you want to play again?');
        }
    }
}
