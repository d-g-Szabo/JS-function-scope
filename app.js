let name = "Bob";

function sayHello() {
  console.log("Hello " + name);
}

sayHello();
console.log(name);

//Creating variables in the function scope
//Variables defined inside a function are only available inside that function. They're not available outside of the function
function sayHello2() {
  let name2 = "Bob";
  console.log("Hello " + name2);
}

sayHello2();
// console.log(name2); // This will throw an error

// testing var scope inside of function
// still need to return the var variable to be able to use it outside of the function
function insideVariable() {
  var test = "test";
  return test;
}

console.log("hello world");

test = insideVariable();

console.log(test);
