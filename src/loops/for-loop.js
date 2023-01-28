// printing first  100 numbers starting from 1
//initialExp : let i= 1;
//condition : i <= 100;

for (i = 10; i <= 100; i++){
    console.log(i)
}

// print all even number between 1-10

//first we need to run a loop from 1-10
// we can check if number even , then only print number
//even :
for (let j = 0; j <= 10;j++ ){
    if (j % 2 === 0) {
        console.log(j)
    }
}
// new
console.log("new")
for (let jk = 0; jk <= 10;jk+=2){
        console.log(jk)
}
// new
console.log("new")
for (let k = 0; k<=20 ; k += 2){
    console.log(k)
}
// new
console.log("new")
for (let k = 1; k<=20 ; k += 2){
    console.log(k)
}
// new
console.log("new")
// answer is tacking less space in memory
// less time to run
// even : remainder will be 0, on dividing the number by 2
// odd : remainder will not be 0

let num = 11;
if(num % 2 === 0){
    console.log('even number:', num);
    console.log(num +' even number:');
}else{
    console.log("Odd number :", num)
    console.log(num ,'odd number:');
}

function max_even(arra) {

    arra.sort((x, y) => y - x);

    for (var i = 0; i < arra.length; i++) {
        if (arra[i] % 2 == 0)
            return arra[i];
    }
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));