 
// 5! = 5*4*3*2*1 = 120
let n = parseInt(prompt('Enter the number: '));

function factorial(number) {
    let res = 1;
    if (number <= 1) {
        console.log('1');
    } else {

        for (let i = 2; i <= n; i++) {
            res = res * i;
        }
        console.log(res);
    }
}
factorial(n);