// Start coding here
let calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

let addResult = calculator.add(10, 20);
console.log(addResult); 

let divideResult = calculator.divide(10, 20);
console.log(divideResult);