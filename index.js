// 1. receivesAFunction(callback)
function receivesAFunction(callback) {
  callback();
}

// 2. returnsANamedFunction()
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function!");
  };
}

// 3. returnsAnAnonymousFunction()
function returnsAnAnonymousFunction() {
  return function () {
    console.log("This is an anonymous function!");
  };
} 

