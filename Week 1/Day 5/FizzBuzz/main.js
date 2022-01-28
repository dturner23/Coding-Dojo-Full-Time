for (i=1;i<=100;i++){  //Starting at 1, going to 100, in increments of 1

    if(((i % 5) == 0) && ((i % 3) == 0)){  //If the number is divisible by 5 and 3, print FizzBuzz

    console.log("FizzBuzz") //Print FizzBuzz

    }else if((i % 3) == 0){  //If the number is divisible by 3, print Fizz

        console.log("Fizz") //Print Fizz

    }else if((i % 5) == 0){  //If the number is divisible by 5, print Buzz

        console.log("Buzz")  //Print Buzz

    } else {  //If the number is not divisible by 5 or 3, print the number

        console.log(i)  //Print the number
    } 
}