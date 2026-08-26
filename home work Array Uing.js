// 1. find the sum of array using javascript

let arr = [10,20,30,40,50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];  
}

console.log("Sum =", sum)


// 2. find the count of even and odd in array using javascript

let ar = [10,15,20,25,30,35,40];

let evencount = 0;

let addcount = 0;

for(let i =0; i<ar.length; i++){
    if(ar[i]%2 == 0){
        evencount++;
    }
    else{
        addcount++;
    }
}
console.log("Even Count =", evencount)
console.log("Odd Count =", addcount)

// 3. reverse the array using javascript
let reverse = [];

for (let i = arr.length-1;  i >=0; i--) {
      reverse.push(arr[i]);
}

console.log("Orignal Array =", arr)
console.log("Reverse Array =", reverse)
arr.reverse();
console.log("Easy Reverse =",arr)

