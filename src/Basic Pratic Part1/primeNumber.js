 
// 2 3 5 7 11 13 17 19 23
//intput = 5
//output 2, 3, 5
// divisiable of1 or itSelf

let n = parseInt(prompt('Enter the number: '));
for (let i = 1; i <= n; i++){
    if(checkPrime(i)){
        console.log(i);
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