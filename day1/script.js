const countdownDisplay = document.getElementById("countdown-display");
const hoursDisplay = document.getElementById('hours');
const minDisplay = document.getElementById('minutes');

function renderCountdown(){
    const christmas = 25;
    const today = new Date().getDate();
    let daysTilChristmas = christmas - today;
    countdownDisplay.textContent = daysTilChristmas;

    //milliseconds
    let ms = new Date().getTime();
    const xmasMS = new Date('December 25, 2021 00:00:00').getTime();

    callHours(daysTilChristmas);
    callMinutes(ms, xmasMS);

    const checkHours = setInterval(callHours(daysTilChristmas), 3600000) //check every hour
    const checkMinutes = setInterval(callMinutes(ms, xmasMS), 60000) //check every minute

}

function callHours(daysTilChristmas) {
    let hours = new Date().getHours();
    let hoursTil = (24 * daysTilChristmas) - hours;
    hoursDisplay.textContent = hoursTil;
}

function callMinutes(ms, xmasMS) {
    ms = new Date().getTime();

    let minutes = ((xmasMS - ms) / 60000);
    let minuteDisplay = parseInt(minutes).toFixed(0);

    minDisplay.textContent = minuteDisplay;
}


renderCountdown();