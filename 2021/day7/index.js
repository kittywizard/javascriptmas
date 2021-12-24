const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const url = 'bells.mp3';
const song = new Audio(url);

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.

playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);

function playAudio() {
    console.log('play')
    song.play();
}

function pauseAudio() {
    console.log('pause')
    song.pause();
}

function stopAudio() {
    console.log('stop')
    song.pause(); //technically no stop function so just pause? restart?
    song.load();
}