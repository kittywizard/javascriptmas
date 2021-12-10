const meter = document.getElementById("meter");
const headline = document.querySelector('.headline');
const container = document.querySelector('.container');
const festivities = document.querySelector('.festivities');

function loadMeter() {
    let loading = setInterval(() => {
        meter.value += 5;
        console.log(`${meter.value} / ${meter.max}`);

        if (meter.value === meter.max) {
            clearInterval(loading);
            loaded();
        }
    }, 1000);

}

loadMeter();

function loaded() {
    headline.textContent = "Loaded!";
    container.style.display = "none";

    festivities.textContent = '🎄❄️✨🎁⛄';

    //background: linear-gradient(180deg,rgb(250,250,250), rgb(100,100,100));

}


// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.