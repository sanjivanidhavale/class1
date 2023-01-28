//not running
let n = parseInt(prompt('Enter the number: '));


function sumOfSquarDigit(num) {
     let sum = 0, res, sqr;
     while (num > 0) {
        res = num % 10;
        sqr = res * res;
        sum = sum + sqr;
        //sum = sum+res*res; 
        num = parseInt(num / 10); 
    }
     console.log(sum);

}
sumOfSquarDigit(n);
