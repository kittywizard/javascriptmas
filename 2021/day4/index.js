const items = ["Candles", "Decorations", "Chocolate", "Cat Food"]
const checklist = document.getElementById("checklist");


const displayList = 
        items.map(item => {
            let input = document.createElement('input');
            input.type = 'checkbox';

            let label = document.createElement('label');
            label.setAttribute('for', item);
            label.classList.add('strikethrough', 'input-text');
            label.textContent = item;

            let div = document.createElement('div');
            div.appendChild(input);
            div.appendChild(label);

            div.classList.add('checklist-item');
            checklist.appendChild(div);

        })
