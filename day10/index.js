const meter = document.getElementById("meter");
const headline = document.querySelector('.headline');

function loadMeter() {
    let loading = setInterval(() => {
        meter.value += 1;
        console.log(`${meter.value} / ${meter.max}`);

        if (meter.value === meter.max) {
            clearInterval(loading);
            loaded();
        }
    }, 1000);

}

loadMeter();

function loaded() {
    console.log('loaded');

    headline.textContent = "Loaded!";
    meter.style.display = "none";
}


// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.