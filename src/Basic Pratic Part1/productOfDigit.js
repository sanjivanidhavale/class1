

let n = parseInt(prompt('Enter the number: '));
function productOfDigit(num){
    let prod = 1;
    while (num > 0) {
        prod = prod * (num % 10);
        num = parseInt(num / 10); 
    }
    console.log(prod);
}
productOfDigit(n);