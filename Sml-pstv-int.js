const orderNumbers = [3, 4, -1, 1];
let index = 0;
let value = 0;
// temp = orderNumbers;

for(let i = 0; i < orderNumbers.length; i++) {
    value = orderNumbers[i];
    index = value - 1;
}

// [3, 4, -1, 1]
// i = 0
// value = 3
// index = 2
// [-1, 4, 3, 1]

// i = 0
// value = -1
// Not Eligilble
// ------------------------------------------------------------------------------------
// R
// RID
// RIDDH
// RIDDHI 
// RIDDHI MA
// RIDDHI MALV
// RIDDHI MALVIY
// RIDDHI MALVIYAA

// let str = "RIDDHI MALVIYAA";

// for (let i = 0; i < str.length; i++) {
//     if(i%2 != 0) {
//         for (let j = 0; j < i; j++) {
//             document.write(str[j]);
//         }
//         document.write("<br/>");
//     }
// }

// R           A
// RI         MA
// RID       RMA
// RIDD     ARMA
// RIDDH   HARMA
// RIDDHI SHARMA
// RIDDH   HARMA
// RIDD     ARMA
// RID       RMA
// RI         MA
// R           A

// 1>
// ---------------- 
// R           A
// RI         MA
// RID       RMA
// RIDD     ARMA
// RIDDH   HARMA
// RIDDHI SHARMA

// let name = 'RIDDHI SHARMA';
// let space = name.length;
// let lines = [];

// for (let i = 0; i < 6; i++) {
//     let line = '';
//     for (let j = 0; j < name.length; j++) {
//         if(j <= i || j >= name.length-(i+1)) {
//             line += name[j];
//         }
//         else {
//             line += ' ';
//         }
//     }
//     lines.push(line);
// }

// document.getElementById('out').textContent = lines.join('\n');

// RIDDHI SHARMA
// RIDDH   HARMA
// RIDD     ARMA
// RID       RMA
// RI         MA
// R           A

// let name = 'RIDDHI SHARMA';
// let space = name.length;
// let lines = [];

// for (let i = 0; i < 6; i++) {
//     let line = '';
//     for(let j = 0; j < name.length; j++) {
//         if(j <= (5 - i) || j >= (7 + i)) {
//             line += name[j];
//         }
//         else {
//             line += ' ';
//         }
//     }
//     lines.push(line);
// }

// document.getElementById('out').textContent = lines.join('\n');

// R           A
// RI         MA
// RID       RMA
// RIDD     ARMA
// RIDDH   HARMA
// RIDDHI SHARMA
// RIDDH   HARMA
// RIDD     ARMA
// RID       RMA
// RI         MA
// R           A

let name = 'RIDDHI SHARMA';
let space = name.length;
let lines = [];

for (let i = 0; i < 6; i++) {
    let line = '';
    for(let j = 0; j < name.length; j++) {
        if(j <= (5 - i) || j >= (7 + i)) {
            line += name[j];
        }
        else {
            line += ' ';
        }
    }
    lines.push(line);
}

document.getElementById('out').textContent = lines.join('\n');