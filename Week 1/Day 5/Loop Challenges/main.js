// Print Odds
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

for (var i = 1; i <= 20; i++) { // i is the variable, 1 is the starting point, 20 is the stopping point
    if (i % 2 !== 0) {  // if i is not divisible by 2, then it is odd
        console.log(i);  // console.log i
    }
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (var i = 100; i >= 0; i--) {  // i is the variable, 100 is the starting point, 0 is the stopping point, incrementing by -1
    if (i % 3 ==0) {  // if i is divisible by 3, then it is evenly divisible by 3
        console.log(i);
    }
}

// Print the Sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (var i = 4; i >= -3.5; i-=1.5) { // i is the variable, 4 is the starting point, -3.5 is the stopping point, increment by 1.5
    console.log(i);
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the 
// end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var i = 1 // i is the variable, 1 is the starting point
var sum = 0 
while (i <= 100) {
    sum += i++;
}
console.log(sum);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the 
// end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var product = 1
for ( i = 1; i <= 12; i++) {
    product = product * i;
}
console.log(product);
