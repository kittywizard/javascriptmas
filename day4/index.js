const items = ["Candles", "Decorations", "Chocolate", "Cat Food"]
const checklist = document.getElementById("checklist");


const displayList = 
        items.map(item => {
            let input = document.createElement('input');
            input.type = 'checkbox';

            let label = document.createElement('label');
            label.setAttribute('for', item);
            label.classList.add('strikethrough');
            label.textContent = item;

            let div = document.createElement('div');
            div.appendChild(input);
            div.appendChild(label);

            div.classList.add('checklist-item');
            checklist.appendChild(div);

        })



// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

