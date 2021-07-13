for (i = 1; i <= 100; i++) {
    x = i / 15
    y = i / 3
    z = i / 5
  
  //isinteger - value that is not float so fully divisible
  
    if (Number.isInteger(x)) {
        console.log("FizzBuzz")    //div by 15
    } else if (Number.isInteger(y)) {
        console.log("Fizz")          //div by 3
    } else if (Number.isInteger(z)) {
        console.log("Buzz")      //div by 5
    } else {
        console.log(i)   //print no
    }
}
