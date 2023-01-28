let data = [50, 12, 45, 55, 88];
let filterData = data.filter(function (e, i) {
    return e >= 50;
});
console.log(data)
console.log(filterData);

let Data = [20,50, 12, 45, 55, 88,95, 10,68, 56, 110, 25,90];
let filterdata = Data.filter(function (element) {
    return element >= 50 && element<=90;
});
console.log(Data)
console.log(filterdata);