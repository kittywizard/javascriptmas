const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
const container = document.querySelector('.container');


btn.addEventListener('click', fix);

function fix() {
    document.body.style.backgroundColor = "var(--dark-green)";
    btn.style.display = 'none';

    const slowChange = setInterval(() => {
        container.classList.add('fix-container');
    }, 2000);

    const slowText = setInterval(() => {
        greeting.textContent = '🎅🏻 Merry Christmas! 🎄'; //add emoji
    }, 2000)
}




