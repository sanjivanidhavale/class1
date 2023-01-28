// even number

let arr = [1, 2, 8, 4, 5, 6];
console.log(arr);
//1
function checkEvenNumber(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
checkEvenNumber(arr);
console.log(arr);
//2
// even number array print indx value;
function checkEvenindexValue(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            console.log(i);
        }
    }
}
checkEvenindexValue(arr);
console.log(arr);

//3
// even indx value print
function printEvenIndex(arr){
    for (i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
printEvenIndex(arr);

function printEvenIdx(arr){
    for (i = 0; i < arr.length; i=i+2){
        console.log(arr[i]);
    }
}
printEvenIdx(arr);
console.log(arr);

//4
//even indx number;
function checkEvenindex(arr){
    for (i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
checkEvenindex(arr);
console.log(arr);

