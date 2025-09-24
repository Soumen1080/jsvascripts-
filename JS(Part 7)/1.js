// write an arrow function named arrayAverage that accepts an array of numbers and returns tha average of those numbers . 

const arrayAverage = (arr) => {
   let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;

}   

console.log(arrayAverage([10,20,30,40,50])); // 30
array = [7,3,388,46,29];
console.log(arrayAverage(array)); // 94.6