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
    document.body.classList.add('fully-loaded');
}