const pianoKeys = document.querySelectorAll(".keys .key");
let volumeSlider = document.querySelector(".slider input")

let audio = new Audio("tunes/a.wav");

const playTune = (tune) =>{
    audio.src = `tunes/${tune}.wav`;
    audio.play();
}

pianoKeys.forEach(key =>{
    key.addEventListener("click",() => playTune(key.dataset.key));
})

const pressedKey = (e) =>{
    playTune(e.key);
}

const volumeChanger = (e) =>{
    audio.volume = e.target.value;
}


document.addEventListener("keydown",pressedKey);
volumeSlider.addEventListener("input",volumeChanger);
