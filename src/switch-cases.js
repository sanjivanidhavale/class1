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