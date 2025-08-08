//Qs1.Write a JavaScript program to get the first n elements of an array. 
// [n can be any positive number].
// For example:for array[7,9,0,-2]and n=3
// Print,[7,9,0]




//================NOTE==============================================================
//The code you selected, Array.isArray(arr), is a built-in JavaScript method used to determine whether the value passed to it is an array.

// It's a reliable way to check the type of a variable. It returns true if the variable is an array and false if it is anything else (like a string, number, or object).

// In the context of the function in the Canvas, it's used as a guard clause. It checks if the input arr is actually an array before trying to work with it. If it's not an array, the function immediately returns an empty array [] to prevent errors.

// Here are a few examples:

// Array.isArray([1, 2, 3]) would return true.

// Array.isArray("hello") would return false.

// Array.isArray({a: 1}) would return false.
// ================================================================================================
function first(arr,n = 1){
if (!Array.isArray(arr) || arr.length === 0)
  return  [];

if (n <= 0)
  return [];

return arr.slice(0, n);


}
// --- Examples ---

// Example from the problem description
console.log("Example 1: [7, 9, 0, -2] with n=3");
console.log(first([7, 9, 0, -2], 3)); // Output: [7, 9, 0]

// Example where n is larger than the array length
console.log("\nExample 2: [1, 2, 3] with n=5");
console.log(first([1, 2, 3], 5)); // Output: [1, 2, 3]

// Example where n is not provided
console.log("\nExample 3: [5, 4, 3, 2, 1] with n not provided");
console.log(first([5, 4, 3, 2, 1])); // Output: [5]

// Example with a negative n
console.log("\nExample 4: [7, 9, 0, -2] with n=-3");
console.log(first([7, 9, 0, -2], -3)); // Output: []
