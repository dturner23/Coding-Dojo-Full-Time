//1 - Code Flow Functions


//When we create a variable outside of a function, is has global scope.
//When we create a variable inside of a function, is has local scope.

//Functions are a series of steps that accomplish a task.
//Functions are reusable blocks of code that can be called to perform a task.
//Function declartion:
//Starts with the funtion keyword, followed by the name of the function.
//The function name is followed by the parameters.
//Followed by the function's code block.


var x = 5;
    
function setX(newValue) {
    x = newValue; //Sets the value of x to the value of newValue and becomes global.
}
    
console.log(x); //-->5

//Invoking or calling a function
//Functions are called by using the function name followed by parentheses.

setX(15); //-->15

console.log(x); //-->15


var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x); // --> 5
var result = addToX(-10); 
console.log(result); // -->-5
console.log(x); // -->5


//2 - Code Flow - is the array a palindrome?

function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
