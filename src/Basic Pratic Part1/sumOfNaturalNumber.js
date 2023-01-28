// print print sum of first 10 natural number

let n = parseInt(prompt('Enter the number: '));

// function printSumNumber() {
//     let sum = 0;
//     for (let i = 0; i <= 10; i++){
//         sum = sum + i;
//          console.log(`sum=${i}+${sum}=${sum}`);
//     }
//     // let n = 10;
//     // sum = n * (n + 1) / 2;
//       console.log(sum);
// }
// printSumNumber();

// let n = parseInt(prompt('Enter the number: '));

function printSumNumber(number) {
    let sum = 0;
     for (let i = 0; i <= number; i++){
        sum = sum + i;
        // console.log(`sum=${i}+${sum}=${sum}`);
    }
    //sum = number * (number + 1) / 2;
    console.log(sum);
}
printSumNumber(n);