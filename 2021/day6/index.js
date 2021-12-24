const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {
    if(greeting.classList.contains('christmassified')) {
        greeting.classList.remove('christmassified');
        christmassifierBtn.textContent = 'Christmassify';
    } else {
        greeting.classList.add('christmassified');
        christmassifierBtn.textContent = 'De-christmassify';
    }

}