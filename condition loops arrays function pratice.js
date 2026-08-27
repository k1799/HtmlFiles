//1️⃣ Conditions — if / else / else if / switch

let num = 10;

if (num % 2 == 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}

let a = 18
let b = "18"


// if statement   

if (a == b) {
    console.log("welcome")
}

console.log("thankyouuu")



// if-else


if (10 > 18) {
    console.log("hii")
}
else {
    console.log("byeee")
}


// if-else -ladder
let score = 7;

if (score > 90 && score <= 100) {
    console.log("very good")
}
else if (score > 70 && score <= 89) {
    console.log("good")

}
else if (score > 35 && score <= 69) {
    console.log("average")

}
else {
    console.log("fail")

}




// switch

var names = "kanna";
switch (names) {
    case "veera":
        {
            console.log("doctor")
        }
    case "nithish":
        {
            console.log("shasha")
        }
    case "menna":
        {
            console.log("parlour")
        }
    case "aruna":
        {
            console.log("bakery")

        }
    case "kanna":
        {
            console.log("rooms")
            break;
        }
    case "hari":
        {
            console.log("laptop")

        }
    default:
        {
            console.log("no more")

        }

}



// nested if


if (false) {
        if (true) {
            console.log("1")
        }
        else {
            console.log("2")
        }

    }
    else if (false) {
        if (true) {
            console.log("1")
        }
        else {
            console.log("2")
        }
    }
    else {
        if (false) {
            console.log("1")
        }
        else {
            console.log("2")
        }
    }

//2️⃣ Loops — for / while / do while

for (let i = 10; i >= 0; i--) {
    console.log(i)
}


for (let i = 1; i <= 30; i++) {

    if (i % 5 == 0) {
        console.log(i)
    }
}


// while

let w = "hari";
let i = 1;
while (i <= 5) {
    console.log(w)
    i++;
}


// while 

let u = 30;
let c = 10;

while (b >= c) {
    if (b % 3 == 0) {
        console.log(u)
    }
    b--;
}

// do while


let v = 1;
do {
    console.log(v)
    c++;
}
while (c <= 5);



let d = 99


var count = 0;
do {
    if (d % 4 == 0) {
        count++
    }
    d--;


}
while (d >= 77);

console.log(count)

// for of loop

let weight = [40, 45, 50, 55, 65];
for (let a of weight) {
    console.log(a)
}


// for in


    let form = { name: "rajesh", age: 25 };

for (let s in form) {
    console.log(form[s])
}



//3️⃣ Arrays

let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log("Sum =", sum);

//4️⃣ Functions

function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(15));