setInterval(updateSpec, 1000);

let px = "px";

function updateSpec() {
    

    let volumeOne = localStorage.playerOneVolume;
    let volumeInString = volumeOne.toString();
    volumeInString += px;
    
    
    document.getElementById("liquid-coach").style.height = volumeInString;
    document.getElementById("liquid-coach").style.background = localStorage.playerOneColor;
    
    let volumeTwo = localStorage.playerTwoVolume;
    let volumeTwoInString = volumeTwo.toString();
    volumeTwoInString += px;
    
    document.getElementById("liquid-spec-2").style.height = volumeTwoInString;
    document.getElementById("liquid-spec-2").style.background = localStorage.playerTwoColor;

}