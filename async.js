async function show() {
   return "hi" 
}
show().then(console.log);

// ithu timeout async await using function
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 10000);
    });
}

async function displayUser() {

    console.log("Fetching user...");

    let user = await  getUser();

    console.log(user);
}

displayUser();