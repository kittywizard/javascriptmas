const inputs = document.querySelectorAll(".controls input");
//color = eye [0]
//color 2 = nose [2]
//color 3 = button [1]

//select all the body parts
const eyes = document.querySelectorAll('.eye');
const nose = document.querySelectorAll('.nose');
const buttons = document.querySelectorAll('.button');


inputs.forEach((input, index) => {
    input.addEventListener('change', (e) => {
        e.preventDefault();
        let part = determineChange(index);
        changeColor(part, e.target.value);
    })
});

function changeColor(part, color) {
    //check to see if it's the nose (array with length of 1)
    if(part.length == 1) part[0].style.borderColor = `transparent transparent transparent ${color}`;
    else part.forEach(part => part.style.backgroundColor = color);    
}

function determineChange(index) {
    switch (index) {
        case 0:
            //eyes
            return eyes;
        case 1:
            //buttons
            return nose;
        case 2:
            //nose
            return buttons;
    }
}

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.