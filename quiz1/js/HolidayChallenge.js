/* HoldidayChallenge.js */

/*
In December you're going to row 200,000 kilometers for charity.
Your employer is going to give you 2 cents for every kilometer for the first 100k
and 4 cents every kilometer after. How much will you raise for charity?

output the following when running your JS on the command line: I will raise $<answer> for
charity this year!
*/


var totalCents = (100000 * 2) + (100000 * 4);
var totalDollars = totalCents / 100;
console.log("I will raise $" + totalDollars + " for charity this year!");


