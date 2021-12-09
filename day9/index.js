const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
decorator.addEventListener("click", deckTheHalls)

function deckTheHalls() {
    decorator.checked ? house.textContent = `❄️🎄 🏡 🎄❄️` : house.textContent = `🏡`;
}

// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
