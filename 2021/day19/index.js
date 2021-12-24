let url = "https://foodish-api.herokuapp.com/api/images/dessert";
let foodHolder = document.getElementById('foodHolder');
let backBtn = document.querySelector('.back-btn');

const btn = document.getElementById("btn") 

btn.addEventListener("click", () => {    
    findYum(url);
});

let img, prevImage; //so we can check to see if its undefined or not

async function findYum(url) {

    let fetchImage = await fetch(url);
    let json = await fetchImage.json();

    displayYum(json.image);
}

function displayYum(url) {
    
    if(img !== undefined) {
        prevImage = img.src;
        backBtn.classList.remove('hidden');
        backBtn.addEventListener('click', () => {goBack(prevImage)})
    }
    img = document.createElement('img');
    img.src = url

    swapImage(url, prevImage);
}

function goBack(prevImage) {

    img = document.createElement('img');
    img.src = prevImage;

    foodHolder.textContent = ''; //"replace" previous image
    foodHolder.appendChild(img); 
}

