const btn = document.getElementById("btn")
let food = document.getElementById("food");
const input = document.getElementById('num-input');
const vegInput = document.getElementById('vegetarian-input');
let newDinnerOptions = [];

const dinnerItems = [
    {
        title: "Turkey",
        recipe: "",
        vegetarian: false,
        feedsMax: 20
    },

    {
        title: "Ham",
        recipe: "",
        vegetarian: false,
        feedsMax: 5
    },

    {
        title: "Goose",
        recipe: "",
        vegetarian: false,
        feedsMax: 10
    },

    {
        title: "Tofu",
        recipe: "",
        vegetarian: true,
        feedsMax: 5
    }
]

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

//need to get info from form when button clicked
btn.addEventListener('click', e => {
    calculateDinner(input.value, vegInput.checked);
    e.preventDefault();
});

function calculateDinner(input, veg) {
    //new array that is either veg or not
    veg ?  newDinnerOptions = dinnerItems.filter(item => item.vegetarian == true) : newDinnerOptions = dinnerItems.filter(item => item.vegetarian == false);
    
    //determine number of people and appropriate meal

    newDinnerOptions.forEach((option, index) => {
        // (input >=5) && (newDinnerOptions.feedsMax == 5) ? newDinnerOptions
    });

    //display
    
}