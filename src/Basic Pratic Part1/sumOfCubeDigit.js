//not a runnig
let n = parseInt(prompt('Enter the number: '));

function sumOfCubeDigit(num) {
     let sum = 0, res, cube;
    while (num > 0) {
         
        res = num % 10;
        cube = res * res * res;
        sum = sum + cube;
        num = parseInt(num / 10);   
    }
     console.log(sum);
}
sumOfCubeDigit(n);
// let result = sumOfcubeDigit(n);
// console.log(result);