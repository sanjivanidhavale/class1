

let n = parseInt(prompt('Enter the number: '));

function sumOfEvenDigitAndProductOfOddDigit(num) {
    
    let result, sum = 0, prod = 1;
    
    while (num > 0) {

        result = num % 10;

        if (result % 2 == 0) {
            sum = sum + result;
        } else {
            prod = prod * result;
        }
        
        num = parseInt(num / 10); 
    }
    //console.log(`sum=${sum}, prod=${prod}`);
    return { sum, prod};
}
let ans = sumOfEvenDigitAndProductOfOddDigit(n);
console.log(ans);