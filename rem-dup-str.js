let str = "riddhi"

for (let i = 0; i < str.length; i++) {
    let isDuplicate = 0;
    for (let j = i+1; j < str.length; j++) {
        if(str[i] === str[j]) {
            isDuplicate = 1;
        }
    }
    if(!isDuplicate) {
        console.log(str[i]);
    }
}