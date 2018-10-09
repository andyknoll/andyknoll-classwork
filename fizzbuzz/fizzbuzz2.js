/* fizzbuzz2.js */

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
So if you solved it, your labor market value just went up.
*/

var num = 0;
var str = "";
var tab = "\t";

console.log("");
console.log("FizzBuzz number list:");
console.log("");

for (num = 1; num <= 100; num++) {
    if ((num % 3 == 0) && (num % 5 == 0)) { // divisible by both 3 and 5
        str += "FizzBuzz";
    } else if (num % 3 == 0) {              // divisible by 3   
        str += "Fizz";
    } else if (num % 5 == 0) {              // divisible by 5        
        str += "Buzz";
    } else {
        str += num;
    }

    str += tab;                             // format to columns
    if (num % 10 == 0) {
        console.log(str);                   // print row and clear
        str = "";
    }
}

console.log("");
console.log("Thank You!");
console.log("");

