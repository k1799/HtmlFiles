function calculategrade(marks) {
    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 75){
        return "A";
    }
        else if (marks >= 60){
        return "B";
    }
        else if (marks >= 50){
        return "C";
    }
    else{
        return "Fail";
    }
}
console.log("Marks 98 in Grade = " + calculategrade(98));
console.log("Marks 85 in Grade = " , calculategrade(85));
console.log("Marks 65 in Grade = " + calculategrade(65));
console.log("Marks 52 in Grade = " , calculategrade(52));
console.log("Marks 45 in Grade = " + calculategrade(45));


