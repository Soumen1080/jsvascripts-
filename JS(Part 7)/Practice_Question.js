//Write an arrow function that returrns the square of a number

const square = (n) => n*n;
console.log(square(5)); // 25


// Write a function that prints " Hello World " 5 times at intervals of 2s each.
const id1 = setInterval(() => {console.log("hello World")},2000);
setTimeout(() => {clearInterval(id1)},11000);// i set it to 11s so that it prints 5 times

//