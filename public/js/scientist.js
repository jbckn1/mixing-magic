setInterval(update, 1000);

localStorage.playerOneVolume = Math.floor(Math.random() * 400);
localStorage.playerOneTemp = Math.floor(Math.random() * 100);
localStorage.playerOnePh = Math.floor(Math.random() * 15);
localStorage.playerOneColor = "red";

localStorage.playerTwoVolume = Math.floor(Math.random() * 400);
localStorage.playerTwoTemp = Math.floor(Math.random() * 100);
localStorage.playerTwoPh = Math.floor(Math.random() * 15);
localStorage.playerTwoColor = "green";

localStorage.volumeFlag = 0;
localStorage.tempFlag = 0;
localStorage.phFlag = 0;

document.getElementById("measure-volume-btn").addEventListener("click", measureVolume);
document.getElementById("change-volume-btn").addEventListener("click", displayVolumeInputSection);
document.getElementById("measure-temp-btn").addEventListener("click", measureTemp);
document.getElementById("change-temp-btn").addEventListener("click", displayTempInputSection);
document.getElementById("measure-ph-btn").addEventListener("click", measurePH);
document.getElementById("change-ph-btn").addEventListener("click", displayPHInputSection);
document.getElementById("change-color-btn").addEventListener("click", displayColorInputSection);
document.getElementById("compare-btn").addEventListener("click", checkIfBeakersMatch);

let volumeSubmit = document.getElementById("volume-submit");
let tempSubmit = document.getElementById("temp-submit");
let phSubmit = document.getElementById("ph-submit");
let colorSubmit = document.getElementById("color-submit");

volumeSubmit.onclick = function () {

    let volume = document.getElementById("volume-input-bar").value;
    
    if (isNaN(volume) || volume < 0 || volume > 1000) {
        
    } else {

        localStorage.playerOneVolume = volume;
        document.getElementById("volume-input-container").style.display = "none";
    }
}

tempSubmit.onclick = function () {
    
    let temp = document.getElementById("temp-input-bar").value;
    
    if (isNaN(temp) || temp < 1 || temp > 99) {
        
    } else {
    
        localStorage.playerOneTemp = temp;
        document.getElementById("temp-input-container").style.display = "none";
    }

}

phSubmit.onclick = function () {
    
    let pH = document.getElementById("ph-input-bar").value;

    if (isNaN(pH) || pH < 0 || pH > 14) {
        
    } else {
    
        localStorage.playerOnePh = pH;
        document.getElementById("pH-input-container").style.display = "none";
    }
}

colorSubmit.onclick = function () {

    let color = document.getElementById("color-select").value;

    localStorage.playerOneColor = color;
    document.getElementById("color-input-container").style.display = "none";

}

function measureVolume() {
    
    localStorage.volumeFlag = 1;
}

function displayVolumeInputSection() {

    document.getElementById("volume-input-container").style.display = "block";

}

function measureTemp() {
    
    localStorage.tempFlag = 1;
}

function displayTempInputSection() {
    
    document.getElementById("temp-input-container").style.display = "block";

}

function measurePH() {
    
    localStorage.phFlag = 1;
    
}

function displayPHInputSection() {

    document.getElementById("pH-input-container").style.display = "block";

}

function displayColorInputSection() {

    document.getElementById("color-input-container").style.display = "block";

}

function update() {

    let px = "px";

    let volume = localStorage.playerOneVolume;
    let volumeInString = volume.toString();
    volumeInString += px;

    document.getElementById("liquid").style.height = volumeInString;
    document.getElementById("liquid").style.background = localStorage.playerOneColor;
}

function checkIfBeakersMatch() {
 
    if ((localStorage.playerOneTemp == localStorage.playerTwoTemp) && (localStorage.playerOneVolume == localStorage.playerTwoVolume) && (localStorage.playerOneColor == localStorage.playerTwoColor) && (localStorage.playerOnePh == localStorage.playerTwoPh)) {
        alert("Beakers match! You two won the game! Let the coach know!");
    } else {

        alert("Beakers don't match!");
    }
}
