//Print “Alpha Intern” 5 times using loop
for (let i = 1; i <= 5; i++) {
    console.log("Alpha Intern")
}

//Print number from 1 to 100 using loop
for (let n=1 ; n<=100;n++){
    console.log(n)
}

//Print all even number from between 1 to 100 using loop
for(let num=0;num<=100;num+=2){
    console.log(num)
}
console.log()

//Print the table of 19 using loop.
for (let table=1;table<=10;table++){
    console.log(table*19)
}
console.log()
//Print all numbers from 1 to 100 that are divisible by 3
for (let j=1;j<=100;j++){
    if(j%3==0){
    console.log(j)
    }
}
console.log()

//WAP to check weather a number prime or not.
const prompt = require('prompt-sync')();
let number = 7;
let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
