const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

for (let i=0; i<items.length; i++) {
    checklist.innerHTML += `
         <div class="checklist-item">
                <label for="${items[i]}" class="strikethrough custom">
                    <input type="checkbox" id="${items[i]}" value="${items[i]}">    
                    <span class="checkbox"></span>
                    ${items[i]}
                </label>
            </div>
    `
}


