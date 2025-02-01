let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".images")

const userscorepara = document.querySelector("#user-score")
const compcorepara = document.querySelector("#comp-score")




const gencompchoice = () =>{
    let options = ["rock","scissors","paper"]
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame = () => {
    let buttonchng = document.querySelector(".button")

    buttonchng.style.background="red"
    buttonchng.innerText ="OPPS! your match was draw"

    userscore = 0;
}

const showWinner = (userWin)=>{
    if (userWin){
        userscore++

        userscorepara.innerText = userscore

        let buttonchng = document.querySelector(".button")
    
        buttonchng.style.background="green"
        buttonchng.innerText ="You won the match"
    
        userscore = 1;
        
    } else{
        compscore++

        compcorepara.innerText = compscore

        let buttonchng = document.querySelector(".button")
    
        buttonchng.style.background="black"
        buttonchng.innerText ="Comp won that "
    
        userscore = 1;
    }
}




const playgame=(userChoice) =>{
    console.log("Your choice",userChoice)
    const compChoice = gencompchoice()
    console.log("comp choice",compChoice)

    if(userChoice == compChoice){
        drawGame()
    }else{
        let userWin = true;

        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }else (userChoice === "scissors")
        {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin)
    }
}



choices.forEach((choices) => {
    choices.addEventListener("click",()=>{
        const userChoice = choices.getAttribute("id")
        playgame(userChoice)
      


    })
}
)

