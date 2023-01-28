let arr = [1, 2, 3, 4];
function sunOFArray(arr) {
    let sum = 0;
    for (let i = 0; i <arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
    arr.push(sum);// end side
    console.log(arr);
}
sunOFArray(arr);

let a = [1, 2, 3, 4];
function sumOFArray(a) {
    let sun = 0;
    for (let i = 0; i <a.length; i++){
        sun = sun + a[i];
    }
    a.unshift(sun);// front side
    console.log(sun);
    console.log(a);
}
sumOFArray(a);