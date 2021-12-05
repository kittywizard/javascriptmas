const greetingDisplay = document.getElementById("greeting-display")
const toDisplay = document.querySelector('.to-display');
const fromDisplay = document.querySelector('.from-display');

const form = document.getElementById('submit');
form.addEventListener("submit", (e) => {

    let newData = new FormData(e.target);
    let to = newData.get('to');
    let from = newData.get('from');
    
    e.preventDefault();
    writeGreeting(to, from);
});


const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

function writeGreeting(to, from) {
    let randomNum = Math.floor((Math.random() * greetings.length) + 1);
    greetingDisplay.textContent = greetings[randomNum];
    toDisplay.textContent = `To: ${to}`;
    fromDisplay.textContent = `From: ${from}`;
}