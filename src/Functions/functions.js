// functions : are used when to perform to need perform some similar action in many places inside your scripts

// systax : declaration : creating a function
function function_name() {
    //code
}
function_name();// function envokation : calling a function

//example
// function cancelPayment() {
//     confirm('Do you really want to cancel the Payment?');
// }
// cancelPayment();

//function using parameters

// function function_with_parameters(parameters1, parameters2, parameters3) {
//     //code
// }
// function_with_parameters(1, 2, 3);

function printName(name) {
    console.log(`My name is ${name}`);
}
printName('Sanjeevani')

// // print the sum of 3 number
// let sum = 0;
//// function sumOfTwoNumber(n1, n2, n3) { // passing inside the function is "parameter"
//     sum = n1 + n2 + n3;
//     //sum = 5+4+ undefined
//     console.log(sum);
// }
// console.log(sum);
// // sumOfTwoNumber(5,4,1) // passing inside the function invokation is "argument"
// sumOfTwoNumber(5,4)
// // NaN : not a number eg. 35 line number

// print the sum of 3 number
// paesenInt(string)
let n1 = parseInt(prompt("n1"));// parseInt is used to convertstring type to number type
let n2 = parseInt(prompt("n2"));
let n3 = parseInt(prompt("n3"));
function sumOfTwoNumber(n1, n2, n3) {
    let sum = 0;
    sum = n1 + n2 + n3;
    console.log(sum);
}
sumOfTwoNumber(n1 + n2 + n3);

// pareInt check the value inside the string
// if it finds a number inside the string , it prints the first number.
//parseInt ignores indentions,whitespaces