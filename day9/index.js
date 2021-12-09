const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls);
let emojiArray = ['🎄', '❄️', '✨', '🎁', '⛄'];

const moreBtn = document.querySelector('.btn');

function deckTheHalls() {
    decorator.checked ? house.textContent = `❄️🎄 🏡 🎄❄️` : house.textContent = `🏡`;

    moreBtn.classList.toggle('hidden');
    moreBtn.addEventListener('click', () => {
        let randomNum = Math.floor(Math.random() * emojiArray.length);
        console.log(randomNum)
        house.textContent += emojiArray[randomNum];
    })
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
