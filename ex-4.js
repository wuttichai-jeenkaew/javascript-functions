// Start coding here
let calculator = {
    add: (a, b) => a + b ,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b ,
    divide: (a, b) => a / b,
};

// calculator.mod = (a, b) => { return a % b;}

const addResult = calculator.add(3000, 10);
console.log(addResult);

const divideResult = calculator.divide(3000, 10);
console.log(divideResult);

// console.log(calculator.mod(11,3));
// console.log(calculator);