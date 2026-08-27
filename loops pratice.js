console.log("Forward")
for (let index = 1; index <=10; index++) {
    console.log(index)
}
console.log("Reverse")
for (let index = 10; index >=1; index--) {
    console.log(index)
}
console.log("Even")
for (let index = 1; index <= 20; index++) {
    if (index%2 == 0) {
        console.log(index)
    }
}
console.log("Odd")
for (let index = 1; index <= 20; index++) {
    if (index%2 == 1) {
        console.log(index)
    }
}
console.log("Sum")
let sum = 0;
for (let index = 1; index <= 100; index++) {
    sum = sum+index
}
console.log(sum)