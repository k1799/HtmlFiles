// async function show() {
//    return "hi" 
// }
// show().then(console.log);

function getuser(){
    return new Promise(resolve =>{
         setTimeout(() => {
            resolve("User data received");
        }, 10000);
    });
}

async function display() {
     console.log("Fetching user...");
    let user = await getUser()
    console.log(user);
}


display()