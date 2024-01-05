let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const newGame= document.querySelector("#newGame");

newGame.addEventListener("click",()=>{
    msg.innerText="Play your move";
    userScore=0;
    compScore=0;
    user_score.innerText=0;
    comp_score.innerText=0;

})

const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    console.log("game was draw..");
    msg.innerText= "Game draw";
};

const showWinner=(userWin)=>{
    if(userWin){
      console.log("you win");
      msg.innerText= "You win"; 
      userScore++;
      user_score.innerText=userScore; 
    }
    else{
        console.log("you lose");
        msg.innerText= "You lose";
        compScore++;
        comp_score.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice= genCompChoice();
    console.log("comp choice=", compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userWin= compChoice==="scissors"?false:true; 
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});