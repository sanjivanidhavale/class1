 

let n = parseInt(prompt('Enter the number: '));

function fibonacciNumber(number) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
     for (let i = 2; i < number; i++){
         c = a + b;
         a = b;
         b = c;
         console.log(c);
    }
    
}
fibonacciNumber(n);