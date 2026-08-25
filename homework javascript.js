// 1. Declare Variables Question: Declare variables for name, age, and city.
//  Print them. 
// Sample Input: Name: Arun Age: 20 City: Madurai Sample Output: Arun 20 Madurai


let names = "Kannan";
let age = 20;
let city = "Virudhunagar";

console.log(names, age, city);


// 2. Add Two Numbers Question: Store two numbers in variables and
// print their sum.
// Sample Input: a = 10 b = 5 Sample Output: Sum = 15


let a = 10;
let b = 5;

let sum = a + b;

console.log("Sum =", sum);


// 3.Variable Scope Challenge Write a program:
// Declare variables using var, let, const Use:
// Function Block (if) Try accessing variables in different scopes Task:
// Show which variables are accessible and which are not

var globalVar = "Global Var";
let globalLet = "Global Let";
const globalConst = "Global Const";

function testScope() {

    var functionVar = "Function Var";
    let functionLet = "Function Let";
    const functionConst = "Function Const";

    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);

    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);

    if (true) {
        var blockVar = "Block Var";
        let blockLet = "Block Let";
        const blockConst = "Block Const";

        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }

    console.log(blockVar);   // Accessible
    //console.log(blockLet);   // Error
    // console.log(blockConst); // Error
}
testScope();

function demo() {

    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {

        var x = 100;
        let y = 200;
        const z = 300;

        console.log(a); // ✅
        console.log(b); // ✅
        console.log(c); // ✅

        console.log(x); // ✅
        console.log(y); // ✅
        console.log(z); // ✅
    }

    console.log(x); // ✅
    // console.log(y); // ❌
    // console.log(z); // ❌
}
demo();
