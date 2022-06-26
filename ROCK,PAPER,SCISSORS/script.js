const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
      
          userChoice = e.target.id
          userChoiceDisplay.innerHTML = userChoice
          generateComputerChoice()
          getResult()

}))


const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    switch(randomNumber) {
        case 1 : computerChoice = 'rock';
        break;
        case 2 : computerChoice = 'scissors';
        break;
        case 3 : computerChoice = 'paper'
        break;
        
    }

     computerChoiceDisplay.innerHTML = computerChoice
}


const getResult = () => {
   if(computerChoice === userChoice){
    result = `it's a draw`
   }else if (computerChoice === 'rock' && userChoice === 'paper'){
      result = `you win!`
   }else if(computerChoice === 'rock' && userChoice === 'scissors'){
      result = `you lost!`
   }else if(computerChoice === 'paper' && userChoice === 'scissors'){
      result = `you win!`
   }else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost!'
   }else if(computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'you win!'
   }else if(computerChoice === 'scissors' && userChoice === 'paper'){
      result = 'you lost!'
   }

   resultDisplay.innerHTML = result
}