
const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")


snowBtn.addEventListener('click', () => {
    
    switchTheme("snow", "christmas")
});

christmasBtn.addEventListener('click', () => {
    
    switchTheme("christmas", "snow") //make it log the button name or something instead??
});


// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

function switchTheme(themeAdd, themeRemove) {
    body.classList.remove(themeRemove);
    body.classList.add(themeAdd);
}