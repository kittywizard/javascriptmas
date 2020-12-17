

let kids = 3;
let candy = 9;

let candies = (kids, candies) =>  Math.floor(candies / kids) * kids;    

console.log("Total number of candy is: " + candies(kids, candy));