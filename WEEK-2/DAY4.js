//Store two integers in two variables x and y. Print the sum of the two
function sum(x, y) {
    console.log(x + y)
}
sum(2, 3);

//Store two integers in two variables x and y. Print the product of the two
function mul(x, y) {
    console.log(x * y)
}
mul(2, 3);

//Calculate the average of 5 subjects
function avg(sub1, sub2, sub3, sub4, sub5) {
    let average = (sub1 + sub2 + sub3 + sub4 + sub5) / 5
    console.log(average)
}
avg(23, 78, 56, 90, 22);

//Calculate Area of a Circle, square, rectangle, triangle
function area_circle(radius) {
    console.log(3.14 * radius * radius)
}
area_circle(2);
function area_rectangle(length, breadth) {
    console.log(length * breadth)
}
area_rectangle(4, 5);
function area_square(side) {
    console.log(side ** 2)
}
area_square(4);
function area_triangle(base, height) {
    console.log(0.5 * base * height)
}
area_triangle(2, 4);

//Calculate the simple interest
function simple_interest(p, r, t) {
    console.log(p * r * t);
}
simple_interest(2, 3, 4);

//Calculate the circumference of circle
function circumference(radius) {
    console.log(2 * 3.14 * radius);
}
circumference(2);

// Write a program to perform all the arithmetic operations [except increment and
// decrement operators] of JavaScript of any two numbers stored in the variables num1
// and num2. Also, print the results to the console
function arithmetic(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 ** num2)
    console.log(num1 % num2)

}
arithmetic(2,2);