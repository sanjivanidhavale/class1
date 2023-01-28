//wap write a program print prime number till N 
// 2 3 5 7 11 13 17 19 23
// divisiable of 1 or itSelf

let n = parseInt(prompt('Enter the number: '));
let counter = 0;
for (let i = 1; i <= 100000020; i++){
    if (checkPrime(i)) {
        counter++;
        if (counter == n){
            console.log(i);
        }
        
    }
}

function checkPrime(num) {
    
    if (num <= 1) {
        return false;
    } 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
                return false;
        }
    }
    return true;
}
//isPrime(n) ? console.log("true") : console.log("false");