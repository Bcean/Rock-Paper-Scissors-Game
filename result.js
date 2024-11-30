let playerOption = localStorage.getItem("Option")
let playerOptionNum = parseInt(localStorage.getItem("OptionNum"))
//let 0,1,2 rock paper scissors
let computerOption = Math.floor(Math.random()*3)
let headerResult = document.querySelector("#result")
let headerCompOpt = document.querySelector("#compOpt")
let headerPlayerOpt = document.querySelector("#playerOpt")
let computerOptString;
console.log(typeof computerOption);
console.log(typeof playerOptionNum)



function computerOptToString(numberOpt){
    switch (numberOpt){
        case 0:
            computerOptString = "rock"
            break;
        case 1:
            computerOptString = "paper"
            break;
        case 2:
            computerOptString = "scissors"
            break;
        default:
            console.log("error string conversion")
    }
}

computerOptToString(computerOption);

if (playerOptionNum == 0 && computerOption == 1){
    headerPlayerOpt.innerText = "You chose rock"
    headerCompOpt.innerText = "The computer chose paper"
    headerResult.style.color = "#f35b4f"
    headerResult.innerText = " You lost"
} else if (playerOptionNum == 0 && computerOption == 2){
     headerPlayerOpt.innerText = "You chose rock"
    headerCompOpt.innerText = "The computer chose scissors"
    headerResult.style.color = "#5bea77"
    headerResult.innerText = "You win"
} else if(playerOptionNum == 1 && computerOption == 0){
     headerPlayerOpt.innerText = "You chose paper"
    headerCompOpt.innerText = "The computer chose rock"
    headerResult.style.color = "#5bea77"
    headerResult.innerText = "You win"
}else if (playerOptionNum == 1 && computerOption == 2){
     headerPlayerOpt.innerText = "You chose paper"
    headerCompOpt.innerText = "The computer chose scissors"
    headerResult.style.color = "#f35b4f"
    headerResult.innerText = "You lost"
} else if (playerOptionNum == 2 && computerOption == 1){
     headerPlayerOpt.innerText = "You chose scissors"
    headerCompOpt.innerText = "The computer chose paper"
    headerResult.style.color = "#5bea77"
    headerResult.innerText = "You win"
} else if (playerOptionNum == 2 && computerOption == 0){
     headerPlayerOpt.innerText = "You chose scissors"
    headerCompOpt.innerText = "The computer choose rock"
    headerResult.style.color = "#f35b4f"
    headerResult.innerText = "You lost"
} else if(playerOptionNum == computerOption){
    headerPlayerOpt.innerText = "You chose " + playerOption
    
    headerCompOpt.innerText = "The computer chose " + computerOptString
    headerResult.innerText = "Its a tie"

    headerResult.style.color = "#89d5f1"
}