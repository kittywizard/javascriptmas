
const body = document.getElementById("body")
const greeting = document.getElementById("greeting")

const toggle = document.querySelector('.toggle');
const toggleSwitch = document.querySelector('.toggle-switch');

toggle.addEventListener('click', () => {
    toggleSwitch.classList.toggle('transform');
    toggleSwitch.classList[1] == undefined ? switchTheme('christmas', 'snow') : switchTheme('snow', 'christmas');
});

function switchTheme(themeAdd, themeRemove) {
    body.classList.remove(themeRemove);
    body.classList.add(themeAdd);

    themeAdd == 'christmas' ? greeting.textContent = '🎅 Merry Christmas!' : greeting.textContent = '☃️ Merry Christmas!';
}