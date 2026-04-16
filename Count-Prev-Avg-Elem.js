
// function countResponseTimeRegressions(responseTimes) {
//     // Write your code here
//     let count = 0;
//     responseTimes.forEach((item, index) => {
//         if(index > 0) {
//             let sum = 0; 
//             for(let i = 0; i <= index; i++) {
//                 sum = (sum + responseTimes[i])
//             }
//             console.log("sum::", sum)
//             let avg = parseInt(sum/(index+1));
//             if(avg > responseTimes[index-1]) {
//                 count++;
//             }
//         }
//     })
//     return count;
// }

// function countResponseTimeRegressions(responseTimes) {
//     if (responseTimes.length <= 1) {
//         return 0;
//     }
    
//     let count = 0;
//     let runningSum = responseTimes[0];
//     console.log("runningSum::", runningSum);
    
//     for (let i = 1; i < responseTimes.length; i++) {
//         console.log("responseTimes[i]::", responseTimes[i]);
//         console.log("responseTimes[i] * i::", responseTimes[i] * i);
//         if (responseTimes[i] * i > runningSum) {
//             count++;
//         }
        
//         // Update running sum for next iteration
//         runningSum += responseTimes[i];
//         console.log("Updated::", runningSum);
//     }
    
//     return count;
// }


// console.log("count::", countResponseTimeRegressions([100, 200, 150,300]));

// responseTimes.forEach((item, index) => {
//         let sum = 0; 
//         for(let i = 0; i < index; i++) {
//             sum = (sum + responseTimes[i])
//         }
//         let avg = parseInt(sum/index);

//         if(!isNaN(avg) && responseTimes[index] > avg) {
//             count++;
//         }
// })
// console.log(count);

const responseTimes = [10, 5, 7]
let count = 0;

let sum = responseTimes[0];
let avg = 0;
for (let i = 1; i < responseTimes.length; i++) {
    sum = sum + responseTimes[i];
    if(i != responseTimes.length-1) {
        avg = sum/(i+1);
    }
    if(responseTimes[i] > avg) {
        count++;
    }
}

console.log("count::", count);
// const responseTimes = [100, 200, 150, 300];
// let count = 0;

// let sumPrev = responseTimes[0]; // sum of elements before index 1
// for (let i = 1; i < responseTimes.length; i++) {
//   const avgPrev = sumPrev / i; // average of elements 0..i-1
//   if (responseTimes[i] > avgPrev) {
//     count++;
//   }
//   sumPrev += responseTimes[i]; // include current for the next iteration
// }

// console.log(count);