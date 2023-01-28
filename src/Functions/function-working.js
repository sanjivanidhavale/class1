// see how function are working

let n1 = 5;
let n2 = 5;
function sumOfTwoFunction(a, b) {
    console.log(a * b);
}

let val = sumOfTwoFunction(n1, n2);
console.log(val);


// returning a value from function
// a function can return a value back into the calling code as the result
// If a function does not value, it same as if it returns 'undefined'

// return

function sumOfTwoNumberUsingReturn(a, b) {
    return a + b;// givens you back value of a+b
}
let result = sumOfTwoNumberUsingReturn(5, 3);
console.log("sum of two number " , result);

function addFiveToResult(a){
    console.log("result on adding 5:", a + 5);// 5+3 => 8+5 =>13
}

addFiveToResult(result);


//good Practises
// 1. The name of your function should be self explainatory
// 2. The name of a function should be in cameCase
// 3. One function should perform one action onplay.

//CamelCase
// PascalCase
// snake_case
