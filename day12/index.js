const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?


guests.forEach(guest => addGuest(guest));

btn.addEventListener('click', e => {
    addGuest(input.value);
    e.preventDefault();
});

function addGuest(guest) {
    let li = document.createElement('li');
    li.textContent = guest;
    guestList.appendChild(li);
}
