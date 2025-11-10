for(let i=0;i<5;i++)
{    
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice()
    {
        let computerGenerated = Math.round(Math.random() * 2);
        if (computerGenerated == 0)
        {
            return "rock";
        }
        else if (computerGenerated == 1) 
        {
            return "paper";
        }
        else if (computerGenerated == 2) 
        {
            return "scissor";
        }
    }

    function getHumanChoice()
    {
        return prompt("Enter Your Choice with the exact spelling of 'rock'/'paper'/'scissor' : ").toLowerCase();
    }

    function playRound(computerChoice, humanChoice) 
    {
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissor") 
        {
            if (computerChoice == humanChoice)
            {
                alert(`your choice: ${humanChoice} & Computer choice: ${computerChoice}, hence it's a draw`);
            }
            else if (computerChoice == "paper" && humanChoice == "rock" || computerChoice == "rock" && humanChoice == "scissor" || computerChoice == "scissor" && humanChoice == "paper")
            {
                alert(`your choice: ${humanChoice} & Computer choice: ${computerChoice}, hence you loose`);
                computerScore++;
            }
            else if (humanChoice == "paper" && computerChoice == "rock" || humanChoice == "rock" && computerChoice == "scissor" || humanChoice == "scissor" && computerChoice == "paper")
            {
                alert(`your choice: ${humanChoice} & Computer choice: ${computerChoice}, Congrats! you WON`);
                humanScore++;
            }
        }
        else 
        {
            alert("You made a spelling mistake while providing input.");
        }
    }

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(computerSelection,humanSelection);

    if(i==4)
    {
        if(humanScore>computerScore)
        {
            alert(`Overall you won! on the basis of 5 rounds because you have scored: ${humanScore}; whereas computer has scored: ${computerScore}`);
        }
        else if(computerScore>humanScore)
        {
            alert(`Overall you lost! on the basis of 5 rounds because computer has scored: ${computerScore}; whereas you have scored: ${humanScore}`);
        }
        else if(computerScore==humanScore)
        {
            alert(`Overall you had the draw! with computer on the basis of 5 rounds because you have scored: ${humanScore}; whereas computer has scored: ${computerScore}`);
        }
    }
}