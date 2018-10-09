// chessboard.js

/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.

*/


isEven = function(n) {
    return (n % 2) == 0;
};

// BUG: do not use same function name as param!
buildRow = function(size, rowIsEven, char0, char1) {
    var col = 0;
    var rowStr = "";
    var newline = "\n";

    if (rowIsEven) {
        // create even row starting with char0
        for (col = 0; col < size; col++) {
            isEven(col) ? rowStr += char0 : rowStr += char1;
        }
    } else {
        // create odd row starting with char1
        for (col = 0; col < size; col++) {
            isEven(col) ? rowStr += char1 : rowStr += char0;
        }
    }
    rowStr += newline;            

    return rowStr;
};
 

buildChessBoard = function(size, char0, char1) {
    var row = 0;
    var boardStr = "";
    while (row < size) {
        boardStr += buildRow(size, isEven(row), char0, char1);
        row++;
    }
    return boardStr;
};

var size = 10;
var char0 = " X";
var char1 = " 0";
var chessBoardStr = buildChessBoard(size, char0, char1);

console.log("");
console.log(" Created Chessboard " + size + " x " + size);
console.log("");
console.log(chessBoardStr);
console.log("");

