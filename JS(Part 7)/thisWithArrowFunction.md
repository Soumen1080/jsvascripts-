
```JS

console.log("\n--- Arrow Function `this` ---");

const anotherPerson = {
  name: "Bob",
  sayHelloArrow: () => {
    // `this` here refers to the `this` of the global scope (window or global),
    // because `anotherPerson` object literal does not create a new lexical scope for `this`.
    console.log(`Hello, my name is ${this.name} (arrow function directly in object).`);
  },
  sayHelloMethodWithArrow: function() {
    // `this` here refers to `anotherPerson` because `sayHelloMethodWithArrow` is a regular function.
    // The arrow function inside inherits `this` from its enclosing lexical scope (the `sayHelloMethodWithArrow` method).
    setTimeout(() => {
      console.log(`Delayed Hello, my name is ${this.name} (arrow function in method).`);
    }, 400);
  },
  sayHelloArrowDelayed: () => {
    // `this` here refers to the global scope, as `sayHelloArrowDelayed` itself is an arrow function
    // and inherits `this` from the global scope. The inner arrow function will also inherit from global.
    setTimeout(() => {
      console.log(`Delayed Hello, my name is ${this.name} (double arrow function).`);
    }, 500);
  }
};

anotherPerson.sayHelloArrow(); // Logs `Hello, my name is undefined` (or global object's name)
anotherPerson.sayHelloMethodWithArrow(); // Logs `Delayed Hello, my name is Bob`
anotherPerson.sayHelloArrowDelayed(); // Logs `Delayed Hello, my name is undefined` (or global object's name)

// Example with a constructor function
function PersonConstructor(name) {
  this.name = name;
  this.greet = function() {
    setTimeout(() => {
      // `this` here correctly refers to the instance of PersonConstructor
      // because the arrow function inherits `this` from the `greet` method's context.
      console.log(`Hello, my name is ${this.name} (from constructor with arrow function).`);
    }, 600);
  };
}

const personConstructor = new PersonConstructor("Charlie");
personConstructor.greet(); // Logs `Hello, my name is Charlie`
```