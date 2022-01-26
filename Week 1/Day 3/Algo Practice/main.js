//#1 Always isSunny

var isSunny = true; //boolean
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

//Conditional statement - starts with the "if" keyword
//Another way for us to control the flow of our code
//if the condition is true, then the code inside the curly braces will be executed
//if the condition is false, then the code inside the curly braces will not be executed


if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring); //I should bring: sunglasses, a coat, and a smile!


//#2 Prepare for downcount

for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!"); //10 9 8 7 6 5 4 ignition! 1 liftoff!


//#3 Count Positives

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives=countPositives+1
        }
    }
    
console.log("there are " + countPositives + " positive values"); //there are 4 positive values

//.length tells us how many elements are in the array