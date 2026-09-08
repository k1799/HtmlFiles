// 1. Async/Await – Basic Practice
function getdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("data received");
        },2000);
        });
}
async function show() {
    console.log("start");
    let result = await getdata();
    console.log(result);
    console.log("end");
}
show();

// 2. Async + Try/Catch Practice
function checknumber(num){
    return new Promise((resolve,reject)=>{
        if(num %2 === 0){
            resolve("number is even");
        }
        else{
            reject("number is add");
        }
    })
}
async function check() {
    try{
        let res = await checknumber(11);
        console.log(res);
    }
    catch(er){
        console.log(er);
    }
}
check();