// Nesting Arrays

var arr2d = [[2, 5, 8],
            [3, 6, 1],
            [5, 7, 7]];

function isPresent2d(arr2d, value){
    for (let i = 0; i < arr2d.length; i++){
        if (value == arr2d[i][j]){
            return console.log(true);
        } else {
            console.log(false);
        }
    }
}

// We can console.log the `8` in this array if we

console.log(arr2d[0][2]); // calling the parent and the child

// the first index `0` will select the `[2, 5, 8]` sub-array

// the second index `2` will select the `8` out of that sub-array

// Flatten Array

//Built in methods. Come from pre-baked JS.
// .push() - adds to the end of an array
// .pop() - removes from the end of an array


// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var i = 0; i < arr2d.length; i++) {  // loop through the outer array
        for (var j = 0; j < arr2d[i].length; j++) {  // loop through the inner array
            flat.push(arr2d[i][j]);  // push the inner array's elements to the end of the flat array
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

