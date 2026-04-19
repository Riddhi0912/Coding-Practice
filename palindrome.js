let str = prompt("Enter the string");
let strArr = [];

for(let i = str.length-1; i >= 0; i--) {
    strArr = strArr + str[i];
}

if (strArr == str) {
    console.log(str + " is a palindrome");
} else {
    console.log(str + " is not a palindrome")
}