let options = document.getElementsByClassName("option")
let choices = ["rock", "paper", "scissor"];
let winState = { rock: "scissors",
                 paper: "rock",
                 scissors: "paper"};

for (let i = 0; i< options.length; i++){
    let option = options[i];
    option.addEventListener('click', function(){
        this.classList.add("selected");
        disableOptions();
        battle(this);
    })

}

function disableOptions(){
    for (let i = 0; i< options.length; i++){
        let option = options[i];
        if (!option.classList.contains("selected")){
            option.classList.add("disabled");
        }
    
    }
}

function battle(option){
    let choice = option.dataset.choice;
    let aiChoice = choices[Math.floor(Math.random()*2)];

    console.log(choice);
    console.log(aiChoice);
    if(choice === aiChoice){
        console.log("it is a draw");
    } else if(winState[choice] === aiChoice){
        console.log("player wins!");
    }else{
        console.log("ai wins!");
    }



}