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

document.getElementById('toggleKeyText').addEventListener('change', function() {
    const keys = document.querySelectorAll('.key span');
    keys.forEach(key => {
      if (this.checked) {
        key.classList.add('hidden');
      } else {
        key.classList.remove('hidden');
      }
    });
  });

document.addEventListener("keydown",pressedKey);
volumeSlider.addEventListener("input",volumeChanger);
