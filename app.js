let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let uscore = document.querySelector("#user-score");
let cscore = document .querySelector("#comp-score");



const drawGame = () =>{
     msg.innerText = "Draw";
};


const showWinner = (userWin) =>{
       if(userWin)
       {
          msg.innerText = "You win!";
          userScore++;
          uScore(userScore);
       }
       else
       {
         msg.innerText = "You Lose";
         compScore++;
         cScore(compScore);
       }
};

const uScore = (userScore) =>{
      uscore.innerText=userScore;
}; 

const cScore = (compScore)=>
{
    cscore.innerText = compScore;
};




const genCompChoice = () =>{
     const options =["rock" , "paper", "scissor"];
     const randIdx= Math.floor(Math.random()*3);
     return options[randIdx];
};



const playGame = (userChoice) => {
    console.log("User Choice", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Chocie",compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice ==="paper")
        {
           userWin = compChoice ==="scissor" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
      }
    };




choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const uChoice= choice.getAttribute("id");
         playGame(uChoice);
    });
});