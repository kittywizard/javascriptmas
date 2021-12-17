const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")

const nameInput = document.getElementById('name');
const goodOrBad = document.getElementById('list');

const btn = document.getElementById("btn");
btn.addEventListener("click", sort)

const addName = document.getElementById('add-btn');
addName.addEventListener('click', add);

let hasBeenGood;

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
];

function sort() {
        sorteesArr.forEach(sortee => {
        let li = document.createElement('li');
        li.textContent = sortee.name;
        sortee.hasBeenGood ? niceList.appendChild(li) : naughtyList.appendChild(li);
    });
}

function add(e) {
    e.preventDefault();

    goodOrBad.checked ? hasBeenGood = true : hasBeenGood = false; 

    sorteesArr.push({
        name: nameInput.value,
        hasBeenGood: hasBeenGood
    });

    sort();
}
