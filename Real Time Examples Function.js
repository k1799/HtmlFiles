// 1. Login Button – Function
function login() {
    console.log("User logged in successfully")
}
login();

// 2. Calculate Total Price
function Calculate(Price, quantity) {
    return Price * quantity;
}
let Total = Calculate(500, 2);

console.log(Total);

// 3. Check Age
function checkAge(age) {
    if (age >= 18) {
        return "Eligible";
    } else {
        return "Not Eligible";
    }
}

console.log(checkAge(22));

// 4. Validate Password
function validatePassword(password) {
    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return "Password must contain 8 characters";
    }
}

console.log(validatePassword("kannan1234"));

// 5. Calculate Employee Salary
function calculatesalary(basicsalary, bonus) {
    return basicsalary + bonus;
}
let Salary = calculatesalary(25000, 5000);

console.log("Total Salary:", Salary)

// 6. Search Function
function searchProduct(productName) {
    console.log("Searching for:", productName);
}

searchProduct("Laptop");

// 7. Add to Cart
function addToCart(product) {
    console.log(product + " added to cart");
}

addToCart("Mobile");

// 8. Function with Array
// Short-ஆ நினைவில் வைக்க:
// includes() = "இந்த value உள்ளே இருக்கா?" என்று கேட்கிறது
function findEmployee(employe, name) {
    return employe.includes(name);
}

let employees = ["Kannan", "Ravi", "Arun"];

console.log(findEmployee(employees, "Kannan"));