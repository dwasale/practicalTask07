let num = prompt("Please input a number");
let answer = "";

for(let i = 0; i < num.length; i++) {
    if (i === 1) answer += num.slice(-1); // save first number to temp
    else if (i === num.length - 1) {
        // When the last number is encountered, the last number is put at the beginning, 
        //and the first number stored in temp is put at the end.
        answer += num[1];
    }
    else answer += num[i];
}
console.log("Original Number: " +num);
console.log("Swapped Number: " +answer);