let countDown = document.querySelector("#webCountDown");
let textCountDown = 3
let starterBtn = document.querySelector("#startBtn");
let coverpage = document.querySelector("#cover");
let mainPage = document.querySelector("#mainGame")

starterBtn.addEventListener("click", function(){
    coverpage.style.animationName = "coverSlide";
    coverpage.addEventListener("animationend", function(){
        coverpage.style.display = "none";
        mainPage.style.display = "flex";
        mainPage.style.animationName = "coverReveal";
        
    })
})



mainPage.addEventListener("animationend", preGame)


async function preGame(){
    
    for (let i = 1; i < 5; i++){
        await new Promise(resolve => {//timeout forces weird execution so async wait causes loop to execute then code to sequentially execute after
            setTimeout(() => {
               
                countDown.innerText = textCountDown;
                document.querySelector("#optionContainer").style.display = "flex";
                textCountDown-=1;
                mainPage.addEventListener("click", optionSave)
                console.log(i)
                resolve();
            }, i*1000);//have to multiply by i bc iterations will start at the same time
        });
    }

    console.log("too slow!!!")
    window.location.href = "gameover.html"; //change window
    mainPage.removeEventListener("animationend", preGame)
}


function optionSave(event){
    let clickedElementId = event.target.id;
    if (["rock", "paper", "scissors"].includes(clickedElementId)){//checks if clicked elements id == to one of these options
        switch(clickedElementId){
            case "rock":
                localStorage.setItem("Option", "Rock");
                localStorage.setItem("OptionNum", 0);
                break;
            case "paper":
                localStorage.setItem("Option", "Paper");
                localStorage.setItem("OptionNum", 1);
                break;
            case "scissors":
                localStorage.setItem("Option", "scissors");
                localStorage.setItem("OptionNum", 2);
                break;
            default:
                console.log("uhuph")
        }
            
    } else{
        console.log("wrong")
    }
        

}

let options = [{
    name: "Rock",
    number: 0
},{
    name: "Paper",
    number: 1 
},{
    name: "Scissors",
    number: 2
}]



//console.log(Math.floor(Math.random()*3));




