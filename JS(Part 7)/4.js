let length = 16; // Global variable

function callback() {
  console.log(this.length);
}

const obj = {
  length: 42,
  method(callback) {
    callback();
  }
};

obj.method(callback, 1, 2); // What is the output?

// The output will be 16, because `this` in the callback function refers to the global object where length is 16.
// If you want `this` to refer to `obj`, you can use an arrow function or bind the function.    
// For example, using an arrow function:
obj.method(() => callback()); // This will log 42 because arrow functions do not have their own `this` and inherit it from the enclosing scope, which is `obj` in this case.    