// solution 1
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// solution 2
for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 == 0) result += "Fizz";
    else if (i % 5 == 0) result += "Buzz";
    console.log(result || i);
}