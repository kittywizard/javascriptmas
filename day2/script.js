//deposit profit

let deposit = 3100;
let rate = 20;
let threshold = 5000;
let accountBalance = deposit;
let years = 0;

function depositProfit(deposit, rate, threshold) {
    const moneyPerYear = deposit * (rate / 100);
    
    while(accountBalance < threshold) {
        accountBalance += moneyPerYear;
        years++;
    }

    return years;
}

console.log(depositProfit(deposit, rate, threshold));