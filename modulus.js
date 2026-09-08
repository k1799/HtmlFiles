 export function check(num){
    return new Promise((resolve, reject) =>{
     if (num % 2 === 0) {
        resolve("Divisible");
     }
     else{
        reject("Not Divisible");
     }
    });
   }
//    check(12)
//    .then(result => console.log(result))
//    .catch(error => console.log(error));
