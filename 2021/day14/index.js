const elf = document.getElementById("elf")
const btn = document.getElementById("btn");
const partyBtn = document.getElementById('btn-party');
let elfCount = 1;

btn.addEventListener("click", duplicateElf);
partyBtn.addEventListener('click', partyTime);

function duplicateElf(){

   elf.textContent += '🧝';
   elfCount++;
   console.log(elfCount)

   if(elfCount == 100) elf.textContent = '🧝';
}

function partyTime() {
    elf.textContent += '🍾';
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
