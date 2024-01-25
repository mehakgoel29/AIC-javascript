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
