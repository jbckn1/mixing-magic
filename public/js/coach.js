let px = "px";

setInterval(update, 2000);

function update() {

    let volume = localStorage.playerTwoVolume;
    let volumeInString = volume.toString();
    volumeInString += px;
    
    document.getElementById("display-player-two-ph-level").innerHTML = localStorage.playerTwoPh;
    document.getElementById("display-player-two-temp").innerHTML = localStorage.playerTwoTemp;
    document.getElementById("display-player-two-volume").innerHTML = localStorage.playerTwoVolume;  
    document.getElementById("liquid-coach").style.height = volumeInString;
    document.getElementById("liquid-coach").style.background = localStorage.playerTwoColor;
    
    if (localStorage.volumeFlag == 1) {
    
        document.getElementById("display-player-one-volume").innerHTML = localStorage.playerOneVolume;
        localStorage.volumeFlag = 0;
        
    }
    
    if (localStorage.tempFlag == 1) {
        
        document.getElementById("display-player-one-temp").innerHTML = localStorage.playerOneTemp;
        localStorage.tempFlag = 0;
        
    }
    
    if (localStorage.phFlag == 1) {
        
        document.getElementById("display-player-one-ph-level").innerHTML = localStorage.playerOnePh;
        localStorage.phFlag = 0;
        
    }
    
}