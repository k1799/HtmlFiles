// 1. Function Declaration
// Normal-ah function create pannurathu.
function add(a, b) {
    return a + b;
}

console.log(add(100, 200));

// 2. Function Expression
// Function-ah oru variable-kulla store pannuvom.
let sub = function(a, b) {
    return a - b;
};

console.log(sub(30, 20));

// 3. Arrow Function 
// Modern JavaScript-la romba commonly use pannuvanga.
let multiple = (a,b) => {
    return a*b;
};

console.log(multiple(2,2));

// (another Arrow simple syntax)
let multi = (a, b) => a * b;

console.log(multi(10, 20));

// 4. Anonymous Function
// Name illatha function.
let greet = function() {
    console.log("Hello Kannan");
};

greet();

// 5. Callback Function 
// Oru function-ai another function-ku argument-ah pass pannurathu.
function callingback(name, callback) {
    console.log("Hello " + name);
    callback();
}
function message() {
    console.log("Welcome")
}
callingback("kannan", message);


// 6. Higher-Order Function
// Oru function another function-ai argument-ah accept 
// pannalam or function-ai return pannalam.
function calc(a,b, operation) {
    return operation(a,b);
}
function addition(x,y){
    return x + y;
}

console.log(calc(10,10,addition));

