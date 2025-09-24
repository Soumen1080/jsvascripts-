// what is output of this folloing codse .


const object = { 
    message : "Hello, World!",
    logMessage : () => {
        console.log(this.message);
    },

    printMessage() {
        console.log(this.message);
    },
    logMessage1: function() {
        console.log(this.message);
    },
};

setTimeout(object.logMessage, 1000); // undefined
setTimeout(object.printMessage, 2000); // undefined
setTimeout(object.printMessage1, 2000); // Hello, World!

// explanation: 
// In the first case, logMessage is an arrow function, and arrow functions do not have their own this context. 
// Instead, they inherit this from the surrounding lexical scope, which in this case is the global scope (or undefined in strict mode). 
// Since there is no message property in the global scope, it logs undefined.




// In the second case, printMessage is a regular function. When passed to setTimeout, it loses its context, 
// and this inside printMessage also refers to the global scope (or undefined in strict mode). 
// Again, since there is no message property in the global scope, it logs undefined.




// In the third case, logMessage1 is a regular function defined using the function keyword. 
// When passed to setTimeout, it also loses its context, and this inside logMessage1 refers to the global scope (or undefined in strict mode). 
// However, since logMessage1 is called as a method of the object, it retains the correct this context, 
// and this.message correctly refers to the message property of the object, logging "Hello, World!".