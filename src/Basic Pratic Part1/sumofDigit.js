

let n = parseInt(prompt('Enter the number: '));
function sumOfDigit(num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10); 
    }
    return sum;
}
let result = sumOfDigit(n);
console.log(result);