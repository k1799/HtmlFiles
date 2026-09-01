//normal function using promise
// let Promises = new Promise(function(resolve,reject){
//     let success = true;
//     if (success) {
//         resolve("Data recevied Successfuly");
//     }
//     else{
//         reject("somthing went wrong");
//     }
// })
//false na suma iruntha error mathiri varum atha handle pana than intha then,catch,finally use panurom ithu java la partha mathiri tha
Promises
.then(function(result){
console.log(result);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("promise completed");
})

//Arrow function using promise no then,catch,finally
// let a=new Promise((resolve,reject)=> 
//     {
//     let foods=true;
//     if(foods)
//     {
//         resolve("success")
//     }
//     else
//         {
//             reject("failed")
//         }
//     })
    // console.log(a)

   //Arrow function using promise then,catch,finally used and return concept
   function check(num){
    return new Promise((resolve, reject) =>{
     if (num % 2 === 0) {
        resolve("Divisible");
     }
     else{
        reject("Not Divisible");
     }
    });
   }
   sum(12)
   .then(result => console.log(result))
   .catch(error => console.log(error));
//    .finally(done => console.log(done));
// function kannan(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("Sucess")
//         }
//         else {
//             reject("Failed")
//         }
//     })
// };
// kannan("19")
//  .then(result => console.log(result))
//  .catch(error => console.log(error));