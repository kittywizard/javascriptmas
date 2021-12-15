const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
languageSelector.addEventListener("change", translate)

const greetingsArr = [
    {
        language: "English",
        greeting: "Merry Christmas!"
    },
    {
        language: "Spanish",
        greeting: "Feliz Navidad!"
    },
    {
        language: "Ukrainian",
        greeting: "щасливого Різдва!"
    },
    {
        language: "Welsh",
        greeting: "Nadolig Llawen!"
    }
]

function translate(){
    greetingsArr.forEach(greeting => {
        if(greeting.language == languageSelector.value) {
            
            greetingDisplay.textContent = greeting.greeting;
            greetingDisplay.classList.add('transition');

            let timing = setInterval(() => {
                greetingDisplay.classList.remove('transition');
            }, 2000);
        }
    });
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
