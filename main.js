const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");
const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function() {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;
    if(!player1Name || !player2Name) {
        alert("Please fill inputs");
    } else {
        player1Input.style.display = "none";
        player2Input.style.display = "none";
        startBtn.style.display = "none";
        start({player1Name,player2Name});
        
    }
    
})