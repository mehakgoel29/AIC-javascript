//Write a program to demonstrate the results of comparison operators. Note that both the
//truth and false condition for each operator must be specified
function comparison(n,m) {
    console.log(n == 'm');
    console.log(n === 'm');
    console.log(n == m);
    console.log(n != m);
    console.log(n !== 'm');
    console.log(n > m);
    console.log(n < m);
    console.log(n >= m);
    console.log(n <= m);
}
comparison(2,3);

// Write a program of traffic control that accepts the traffic light displayed and prints the
// message. If the traffic light is red print the vehicles must stop.
function light(traffic_light){
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
}
light('RED');

// Write a program to print the largest of 2 numbers. And 4 numbers
function larger_of_two(a,b){
if (a > b) {
    console.log("a is larger");
} else {
    console.log("b is larger");
}
}
larger_of_two(5,4)

function largest_of_four(a,b,c,d){
    if (a > b && a > c && a > d) {
        console.log("a is largest");
    } else if (b > a && b > c && b > d) {
        console.log("b is largest");
    } else if (c > a && c > b && c > d) {
        console.log("c is largest");
    } else {
        console.log("d is largest");
    }
    
}
largest_of_four(1,2,34,45)

//  Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and
// outputs the number of days until the weekend
function weekend(dayOfWeek){
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
}
weekend('saturday')

//WAP to print even and odd number
function even_odd(num){
    if (num%2==0){
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
}
even_odd(7)

// If cost price and selling price of an item is input through the keyboard, write a program
// to determine whether the seller has made profit or incurred loss. Also determine how
// much profit he made or loss he incurred.
function seller(cp,sp){
    if (sp>cp){
        console.log ("seller has made the profit of : "+ (sp-cp)+"rupees");
    }
    else if (sp<cp){
        console.log("seller has incurred the loss of : "+(cp-sp) +"rupees");
    }
}
seller(45,66)

// Take positive integer input and tell if it is a three-digit number or not
function three_digit(number){
    if (number>0 && number<1000 && number>=100){
        console.log(number +" is a three-digit number");
    }
    else{
        console.log(number +" is not a three-digit number");
    }
}
three_digit(456)

//Take positive integer input and tell if it is divisible by 5 or 3
function divisibility(integer){
    if (integer%5==0){
        console.log(integer+" is divisible by 5");
    }
    if(integer%3==0){
        console.log(integer+" is divisible by 3");
    }
    else{
        console.log(integer+" is neither divisible by 5 nor by 3");
    }
    
}
divisibility(50)

// Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15.
function divisible(integern){
    if ( integern>0 && (integern%5==0 || integern%3==0) && integern%15!=0){
        console.log("it is divisible by 5 or 3 but not divisible by 15.")
    }
    else{
        console.log("condition not satisfied");
    }
    
}
divisible(45)

// Any year is input through the keyboard. Write a program to determine whether the year
// is a leap year or not. (Considering leap year occurs after every 4 years).
function leapyear(year){
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
    
    
}
leapyear(2065);