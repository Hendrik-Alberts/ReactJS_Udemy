"use strict";
//newSection: 12. let and const

//newSection: 13. Arrow Functions

//This a function expression
function printName(name) {
  console.log(name);
}
printName("Hennie");

//Arrow function
const printLast = last => {
  console.log(last);
};
printLast("Alberts");

//NOTE: Couple of things regarding arrow funcions. 1. If only one parameter, then you can omit the parenthesis. 2. If you have a function with no parameters you need to pass empty (). 3. If you only have a return statement in the function block, you can omit the {} and write the code in one line. You also HAVE to omit the return keyword then.

const multiply = num => num * 2;
console.log(multiply(3));

//newSection: 14. Exports and Imports (Modules)
//The idea of modules is that inside a JS file we can import content from another file. This way the JS files know their dependancies. Remember that you can only default export one thing.

//newSection: 15. Understanding Classes

//Classes are 'Blueprints' for objects. It's created with the class keyword. Can have both properties and methods. Also note that the class name is capitalized.

class Person {
  name = "Hennie";
  call = () => {
    console.log("Hello");
  };
}

//newSection: 16. Classes, Properties & Methods
//newSection: 17. Spread & Rest Operator
//newSection: 18. Destructuring
//newSection: 19. Reference and Primitive Types
//newSection: 20. Refreshing Array Funcions
