//Armstrong Number example 3 digit number armstrong nuuner
// 153 = 1^3 + 5^3 + 3^3
// 153 = 1 + 125 + 27
// 153 = 153
let n = parseInt(prompt('Enter the number: '));
console.log('input number', n);
//cube  of digit and sum 
function sumOfCubeDigit(num) {
     let sum = 0, res;
    while (num > 0) {    
        res = num % 10;
        sum = sum + (res * res * res);
        num = parseInt(num / 10);   
    }
    return(sum);
}
let result = sumOfCubeDigit(n);
console.log('sum of digit cube',result);

//ArmStrong Number yes or no
function checkArmStrongNumber(num) {

    if (sumOfCubeDigit(num)===num) {
            console.log('Yes');
    } else {
        console.log('No');
    }
}
checkArmStrongNumber(n);




// function checkArmStrongNumber(num) {
//     let sum = 0, res, n = num;
//     console.log(n);
//     while (num > 0) { 
//         res = num % 10;
//         sum = sum +(res * res * res);
//         num = parseInt(num / 10);   
//     }
//     console.log('Sum of Digit Cube',sum , num, n);
//     if (sum===n) {
//         console.log('Yes');
//     } else {
//         console.log('No');
//     }
// }
// checkArmStrongNumber(n);
