function getRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

// Example usage:
console.log(getRandomNumber(1, 10)); // Output: a random number between 1 and 10
