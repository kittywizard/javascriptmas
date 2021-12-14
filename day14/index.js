const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
let elfCount = 1;

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
   elf.textContent += '🧝';
   elfCount++;
   console.log(elf)

   if(elfCount == 100) elf.textContent = '🧝';
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
