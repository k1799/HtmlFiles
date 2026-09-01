// function getData() {
//     return "Data received";
// }

// let result = getData();
// console.log(result);


// async function getData() {
//     return "Data received";
// }

// let result = getData();

// console.log(result);



// async function getData() {
//     return "Data received";
// }

// async function displayData() {
//     let result =  await getData();

//     console.log(result);
// }

// displayData();




function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received");
        }, 10000);
    });
}

async function displayUser() {

    console.log("Fetching user...");

    let user =   await getUser();

    console.log(user);
}

displayUser();