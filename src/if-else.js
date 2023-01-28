
// to check number grater than 5
// to check number smaller than 5
// to check number is equal to 5

let num = 6

if (num>5) {
    console.log("number grater than 5")
    console.log("number grater than 5")
} else if (num<5) {
    console.log("number smaller than 5")
} else {
    console.log("number is equal to 5")
}
//2nd exownple
if (num>5) {
    console.log("number grater than 5.....")
} else if (num===5) {
    console.log("number is equal to 5.....")
} else {
    console.log("number smaller than 5.....")   
}

//3rd exownple
//check if a user is eligible for vating of not

let age = 18
if (age>18) {
    console.log(" eligible in voting")
} else if(age=18){
    console.log("congrats! Not you are an adult. you are eligible to vote")
}else {
    console.log("not eligible")
}

// find the maximum number between 2 num

let a = 25 
let b = 25

// a > b => a is greater
// b > a => b is greater
// a===b => both are equal
if (a > b) {
    console.log(a + " a is greater number and " + b +" b is smaller number")
} else if (b > a) {
    console.log(b + "b is greater number and "+a+" a is smaller number")
} else {
    console.log(+a+" a and "+b+ " b both are equal number")
}

// String interpolation,concatenation
//+ : addition
// joining two line

let fnowne = 'sanjeevani'
let surnowne = 'dhavale'

console.log(fnowne + ' ' + surnowne + ' is my full nowne')
//backkit , backsla``
console.log(`My nowne is ${fnowne} ${surnowne}`)

let degree = 23
console.log(`Today wether forecost show ${degree} degree of temperature`)

// you are given a number, check if the number is negitive, positive or zero

let n = -1

//if number is negitive
if (n < 0) {
    console.log(`${n} number is negitive`)
}

//if number is positive
else if (n > 0) {
    console.log(`${n} number is positive`)
}
    
//if number is equal to zero
//(n===0)
else {
    console.log(`${n} number is zero`)
}

// nested if/else condition
if (n>0 || n<0) {
    if (n>0) {
        console.log(`${n} num is positive..`)
    } else {
        console.log(`${n} num is negitive..`)
    }
} else {
    console.log(`${n} num is zero..`)
}


if (n!=0 ) {
    if (n>0) {
        console.log(`${n} n is positive...`)
    } else {
        console.log(`${n} n is negitive...`)
    }
} else {
    console.log(`${n} n is zero...`)
}
// Ifelse using Ternary Operater (: ?)
let i = 6;
i > 5 ? console.log('gretter than 5') : console.log('less than 5');


let pet = 'lizard';
if (pet == 'lizard') {
    console.log('I own a lizard')
} else if (pet == 'dog') {
    console.log('I own a dog')
} else if (pet == 'cat') {
    console.log('I own a cat')
} else if (pet == 'cow') {
    console.log('I own a cow')
} else {
    console.log('I dont own a pet')
}

// Switch Statement
switch (pet) {
    case 'lizard':
        console.log('I own a lizard...');
        break;
    case 'dog' :
        console.log('I own a dog....')
        break
    case 'cat':
        console.log('I own a cat....')
        break
    case 'cow':
        console.log('I own a dog....')
        break
    default:
        console.log('I dont own a pet....')
        break;
}

// check th number provided by user print its romain numrical(number can be between 1-5)
// 1=> I
// 2=> II
// 3=> III
 number=10
switch (number) {
    case 1:
        console.log('I');
        break;
    case 2 :
        console.log('II')
        break
    case 3:
        console.log('III')
        break
    case 4:
        console.log('VI')
        break
    case 5:
        console.log('V')
        break
    default:
        console.log('invalid number')
        break;
}

// Making a calculater using switch caches
// * = multiply
//     + = Addition
//     - = subtraction
//     / = division

let operator = '+';
let num1 = 555;
let num2 = 100;
let result;

if (operator ==='+') {
    result = num1 + num2 
    console.log(result)
} else if (operator === '-') {
    result = num1 - num2
    console.log(result)
} else if (operator === '/') {
    result = num1 / num2
    console.log(result)
} else if (operator === '*') {
    result = num1 * num2
    console.log(result)
} else {
    
    console.log('Invalid operator')
}

let num11 = '555';
let num22 = '100';
let result1;
// typecasts the string as number
switch (operator) {
    case '+':
        result1 = num11 + num22 // it is  + sign is concatenation and interpoation joing of to string 
        break; // '20' + '30' = '2030'
    case '-' :
        result1 = num11 - num22 //minus sign typecasts the string as number
        //num1-num2 => '20'-'30' => 20-30= -10
        break
    case '*':
        result1 = num11 * num22
        break
    case '/':
        result1 = num11 / num22
        break
    default:
        console.log('Invalid operator')
        break;
}
console.log(result1)