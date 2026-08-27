// Find the number of vowels and consonants in the string:
// 		let str = "javascript programming";

let words = "javascript programming";
let count = 0;

for (let i = 0; i <= words.length; i++) {
    if (words.charAt(i) == 'a' || words.charAt(i) == 'e' || words.charAt(i) == 'i' || words.charAt(i) == 'o' || words.charAt(i) == 'u') {
        count++;
    }
}
console.log(count);
// 	Check whether the given string is a palindrome:
// 		let str = "madam";

let pali = "madam";

let rev = "";

for (let i = pali.length - 1; i >= 0; i--) {
    rev += pali[i];
}
if (pali === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// Find the longest word in the string:
// 	let str = "I love learning JavaScript deeply";

let letter = "I love learning JavaScript deeply";
let wording = letter.split(" ");
let longest = "";

for(let i=0; i<wording.length; i++){
    if(wording[i].length > longest.length){
        longest = wording[i];
    }
}
console.log(longest);

// 	Reverse the string without using built-in reverse():
// 		let str = "hello world";

let reverse = 'hello world';

for (let index = reverse.length - 1; index >= 0; index--) {
    console.log(reverse[index]);
}

// Count how many times a specific character appears:
// 	let str = "banana";
// 	let char = "a";
let fruit = "banana";
let char = "a";
let counts =0;
for(let i=0; i< fruit.length; i++){
    if(fruit[i] == char){
        counts++;
    }
}
console.log(counts)
