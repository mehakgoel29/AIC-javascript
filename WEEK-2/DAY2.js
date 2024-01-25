//Write a program to demonstrate the results of comparison operators. Note that both the
//truth and false condition for each operator must be specified

let n=29
console.log(n=='29');
console.log(n==='29');
console.log(n==5);
console.log(n!=29);
console.log(n!=='29');
console.log(n>3);
console.log(n<3);
console.log(n>=29);
console.log(n<=29);


// Write a program of traffic control that accepts the traffic light displayed and prints the
// message. If the traffic light is red print the vehicles must stop.
const prompt = require('prompt-sync')();
let traffic_light= prompt("Enter RED, YELLOW or GREEN: ");
if (traffic_light=='RED'){
    console.log("vehicle must stop");
}
else if (traffic_light=="YELLOW"){
    console.log("vehicle must wait");
}
else if (traffic_light=="GREEN"){
    console.log("vehicle must Go");
}
else{
    console.log("ERROR");
}


// Write a program to print the largest of 2 numbers. And 4 numbers
let a = 2;
let b = 8;
let c = 10;
let d = 1;

// for 2 numbers
if (a > b) {
    console.log("a is larger");
} else {
    console.log("b is larger");
}

// for 4 numbers
if (a > b && a > c && a > d) {
    console.log("a is largest");
} else if (b > a && b > c && b > d) {
    console.log("b is largest");
} else if (c > a && c > b && c > d) {
    console.log("c is largest");
} else {
    console.log("d is largest");
}


//  Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and
// outputs the number of days until the weekend
let dayOfWeek="tuesday";
if (dayOfWeek=="monday"){
    console.log("DayLeftUntilWeekend ="+6);
}
else if(dayOfWeek=="tuesday"){
    console.log("DayLeftUntilWeekend ="+5);
}
else if(dayOfWeek=="wednesday"){
    console.log("DayLeftUntilWeekend ="+4);
}

else if(dayOfWeek=="thursday"){
    console.log("DayLeftUntilWeekend ="+3);
}

else if(dayOfWeek=="friday"){
    console.log("DayLeftUntilWeekend ="+2);
}

else if(dayOfWeek=="saturday"){
    console.log("DayLeftUntilWeekend ="+1);
}
else{
    console.log("yeah its weekend");
}

//WAP to print even and odd number
let num=8;
if (num%2==0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}

// If cost price and selling price of an item is input through the keyboard, write a program
// to determine whether the seller has made profit or incurred loss. Also determine how
// much profit he made or loss he incurred.

let cp=prompt("enter the cost price : ");
let sp=prompt("enter the selling price : ");
if (sp>cp){
    console.log ("seller has made the profit of : "+ (sp-cp)+"rupees");
}
else if (sp<cp){
    console.log("seller has incurred the loss of : "+(cp-sp) +"rupees");
}


// Take positive integer input and tell if it is a three-digit number or not
let number = prompt("enter the number to check if it is a three-digit number or not : ");
if (number>0 && number<1000 && number>=100){
    console.log(number +" is a three-digit number");
}
else{
    console.log(number +" is not a three-digit number");
}

//Take positive integer input and tell if it is divisible by 5 or 3
let integer=prompt("enter a number to check divisibility by 3 and 5 : ")
if (integer %5==0){
    console.log(integer+" is divisible by 5");
}
if(integer%3==0){
    console.log(integer+" is divisible by 3");
}
else{
    console.log(integer+" is neither divisible by 5 nor by 3");
}

// Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15.
let integern=prompt("enter a number ");
if ( integern>0 && (integern%5==0 || integern%3==0) && integern%15!=0){
    console.log("it is divisible by 5 or 3 but not divisible by 15.")
}
else{
    console.log("condition not satisfied");
}

// Take positive integer input and tell if it is divisible by 5 and 3.
let inputNum=prompt("enter the number");
if (inputNum%5==0 && inputNum%3==0){
    console.log("it is divisible by 5 and 3");
}
else{
    console.log("condition not satisfied");
}

// Take 3 positive integers input and print the greatest of them.
let n1= prompt("enter ist integer: ");
let n2= prompt("enter second integer: ");
let n3= prompt("enter third integer: ");
if(n1>0 && n2>0 && n3>0){
    if (n1>n2 && n1>n3){
        console.log("n1 is greatest");
    }
    else if (n2>n1 && n2>n3){
        console.log("n2 is greatest");
    }
    else if (n3>n1 && n3>n2){
        console.log("n3 is greatest");
    }
    else{
        console.log("choose 3 diff numbers");
    }
}
else{
    console.log("choose a positive integer");
}

// Any year is input through the keyboard. Write a program to determine whether the year
// is a leap year or not. (Considering leap year occurs after every 4 years).
let year = prompt("enter a year to check whether the year is a leap year or not: ");
if (year>0 && year>1000 && year<10000){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(year +" is a leap year ");
    }
    else{
        console.log( year+" is not a leap year");
    }
}
else{
    console.log("enter a correct year");
}


