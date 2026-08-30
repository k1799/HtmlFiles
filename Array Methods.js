// 1. forEach() 
// Array-la irukkura ovvoru item-um process panna use pannuvom.
let employe = ["kannan","vijay","vinayaga"];

employe.forEach(function(Employee){
    console.log(Employee)
});

// Another for each Arrow function
employe.forEach(emp => {
    console.log(emp);
});

// 2. map() 
// Existing array-la irukkura values-ah modify panni 
// new array create panna use pannuvom.
let prices = [100, 200, 300];

let nweprice = prices.map(function(Price){
return Price + 50;
});

console.log(nweprice);

// 3. filter()
// Condition satisfy pannura items mattum new array-ah return pannum.
let pricing = [100, 500, 200, 800, 300];

let result = pricing.filter(function(price) {
    return price >= 500;
});

console.log(result);

// 3. filter()
// Condition satisfy pannura items mattum new array-ah return pannum.
let priced = [100, 500, 900, 800, 300];

// priced[2] = 900;

let resulted = priced.filter(function(price) {
    return price >= 500;
});

console.log(resulted);
