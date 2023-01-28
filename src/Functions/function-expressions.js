'use strict' // it was made to make your code compartable with ilder welsion of js 

// // function declaration

// // when the function is created is created, its a value . It is stored inside a variable; 
// function sayHi() { //creation function
//     console.log("Hello");
// }
// sayHi();
// //console.log(sayHi)

// let func = sayHi; // coping the value of sayHi to func variable
// console.log(func);
// func();

// // function experassion : wher you creat a function and assign inside a variable
// // anonymous function because this function is not having any name.
// //assing to variable or variable like function
// let SayHello = function () {
//     console.log('say Hello function');
// }
// SayHello();
// console.log(SayHello);
// console.log(SayHello());
// let func2 = SayHello
// func2()

// // Different between FD and FE
// // 1.FD can be called even before it is created but Fe can only be called after it is created
// let a = 10;
// let b = a;
// console.log(a, b);

// let result = sum(3, 4);
// console.log(result);

// function sum(a, b) {
//     return a + b;
// }
// console.log(result);

// // Function Expression are when the expression reached them

// let result2 = sum(3, 6);
// console.log(result2);

// let sum1 = function (a, b) {
//     return a + b;
// }
// console.log(result2);

// let result3 = sum(5, 6);
// console.log(result3);

// let sum2 = function (a, b) {
//     return a + b;
// }
// console.log(result3);

// // console.log(c); 
// let c = 10;
// console.log(c);





//  In strict mode, when FD within a block , its visiable everywhere inside that block. but not outside block.
//
// let age = 30;
// if (age > 18) {
//     function isEligible() {
//         console.log("yes")
//     }isEligible();
// } else {
//     function isEligible() {
//         console.log("no")
//     } isEligible();
// }


// //isEligible(); //you can access FD inside the block
// let age = 14;
// let isEligible;
// if (age > 18) {
//      isEligible = function() {
//         console.log("yes")
//     } 
// } else {
//      isEligible = function() {
//         console.log("no")
//     }
// }
// console.log(isEligible);
// isEligible();


// let op = '+';
// if (op === '+') {
//     function sum(a, b) {
//         console.log(a + b);
//     }
//     sum(4, 3);
// } else if (op === '-') {
//     function minus(a, b) {
//         console.log(a - b);
//     }
//     minus(4, 3);
// } else if (op === '*') {
//     function multiply(a, b) {
//         console.log(a * b);
//     }
//     multiply(4, 3);
// } else {
//     function division(a, b) {
//         console.log(a / b);
//     }
//     division(4, 3);
// }
//sum(4, 3);
//minus(4, 3);

let op = '-';
let sum;
let minus;
let multiply;
let division;
if (op === '+') {
     sum = function(a, b) {
        console.log(a + b);
    }
    //sum(4, 3);
} else if (op === '-') {
     minus = function(a, b) {
        console.log(a - b);
    }
    //minus(4, 3);
} else if (op === '*') {
     multiply = function (a, b) {
        console.log(a * b);
    }
    //multiply(4, 3);
} else {
     division = function(a, b) {
        console.log(a / b);
    }
    //division(4, 3);
}
//sum(4, 3);
minus(4, 3);
multiply(4, 3);
division(4, 3);