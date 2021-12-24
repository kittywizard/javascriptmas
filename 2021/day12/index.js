const input = document.getElementById("input")
const btn = document.getElementById("btn")
let xBtn = document.querySelectorAll('.remove-icon');

let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?

guests.forEach((guest, index) => {
    addGuest(guest, index)
    xBtn = document.querySelectorAll('.remove-icon'); 
});

btn.addEventListener('click', e => {
    guests.push(input.value); //push new entry into array so we can delete it later
    addGuest(input.value);
    e.preventDefault();
});

function addGuest(guest, index) {

    let li = document.createElement('li');
    li.classList.add(`${index}-guest`);

    // //create some sort of remove element
    // let x = document.createElement('span');
    // x.textContent = 'x';
    // x.classList.add('remove-icon');

    //append everything together
    li.textContent = guest;
    // li.append(x);
    guestList.appendChild(li);
}

// //i don't think this is running to add new things to the xBtn array when a new guest is added?

// xBtn.forEach((btn, index) => {

//     btn.addEventListener('click', () => {
//         //need to know: index will tell me which x button was selected.
//         //should be able to grab the li with the class that matches that index.

//     });

// });
