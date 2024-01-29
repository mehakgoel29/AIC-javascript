//Print “Alpha Intern” 5 times using loop
function Alpha(){
    for (let i = 1; i <= 5; i++) {
        console.log("Alpha Intern")
    }
}
Alpha()

//Print number from 1 to 100 using loop
function loop(){
    for (let n=1 ; n<=100;n++){
        console.log(n)
    }
}
loop()

//Print all even number from between 1 to 100 using loop
function even(){
    for(let num=0;num<=100;num+=2){
        console.log(num)
    }
    console.log()
    
}
even()

//Print the table of 19 using loop.
function table19(){
    for (let table=1;table<=10;table++){
        console.log(table*19)
    }
}
table19()

//Print all numbers from 1 to 100 that are divisible by 3
function prime(number){
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
}
prime(7)