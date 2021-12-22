// This is a script that plays the children's game of FizzBuzz
let i = 1;
while (i <= 100) {
    let output = "";
    if (i % 3 == 0) {output += "Fizz";}
    if (i % 5 == 0) {output += "Buzz";}
    if (output == "") {output = i;}
    console.log(output);
    i++;
}