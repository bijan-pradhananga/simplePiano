const pianoKeys = document.querySelectorAll(".keys .key");

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

document.addEventListener("keydown",pressedKey)