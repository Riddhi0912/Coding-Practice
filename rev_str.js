let str = 'This is a pen';
let str2 = [];

for(i = str.length-1; i >= 0; i--) {
    str2 = str2 + str[i];
}

console.log(str2); 