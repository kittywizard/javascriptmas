const btn = document.getElementById("btn")
let food = document.getElementById("food");
const input = document.getElementById('num-input');
const vegInput = document.getElementById('vegetarian-input');
const result = document.getElementById('result');
let newDinnerOptions = [];

let a = document.createElement('a');

const dinnerItems = [
    {
        title: "Turkey",
        recipe: "https://tastesbetterfromscratch.com/easy-no-fuss-thanksgiving-turkey/",
        vegetarian: false,
        feedsMax: 20
    },

    {
        title: "Ham",
        recipe: "https://www.allrecipes.com/recipe/24501/tangy-honey-glazed-ham/",
        vegetarian: false,
        feedsMax: 5
    },

    {
        title: "Goose",
        recipe: "https://www.bbcgoodfood.com/recipes/gordons-christmas-roast-goose",
        vegetarian: false,
        feedsMax: 10
    },

    {
        title: "Stuffed Squash",
        recipe: "https://thefirstmess.com/2015/12/08/stuffed-squash-with-broccoli-rabe-quinoa-recipe/",
        vegetarian: true,
        feedsMax: 5
    },

    {
        title: "Veggie Meatloaf",
        recipe: "https://www.acouplecooks.com/vegetarian-meatloaf/#tasty-recipes-16982",
        vegetarian: true,
        feedsMax: 10
    },

    {
        title: "Mushroom Pot Pie",
        recipe: "https://thefirstmess.com/2021/11/17/vegan-mushroom-bourguignon-pot-pie/",
        vegetarian: true,
        feedsMax: 20
    }
]
//need to get info from form when button clicked
btn.addEventListener('click', e => {
    a.textContent = '';
    calculateDinner(input.value, vegInput.checked);
    e.preventDefault();
});

function calculateDinner(input, veg) {
    //new array that is either veg or not
    veg ?  newDinnerOptions = dinnerItems.filter(item => item.vegetarian == true) : newDinnerOptions = dinnerItems.filter(item => item.vegetarian == false);
    
    //determine number of people and appropriate meal
    //this is a MESS .. but it works
    newDinnerOptions.forEach(option => {
        if(input <= 5 && option.feedsMax == 5)  displayDinner(option);
        else if (input > 5 && input <=10 && option.feedsMax == 10)  displayDinner(option);
        else if(input > 10 && input<=20 && option.feedsMax == 20)  displayDinner(option)
        else if (input > 20) {
            food.textContent = 'making someone else cook dinner.';
        }
    });
}

function displayDinner(option) {
    food.textContent = option.title;
    a.textContent = 'Recipe';

    a.href = option.recipe;
    a.classList.add('recipe-link');

    result.appendChild(a)
}