  let kannan ={
         name:"kannan",
         age: 27
        };
function check(name){
return new Promise(function(resolve,reject){

    if("kannan" === name){
      
        resolve(kannan);
    }
    else{
        reject("error");
    }
})
}
check("kannan")
.then(result => console.log(result))
.catch(error => console.log(error));

