var data = [30, 20, 51, 81, 4, 60, 5]
//map
//console.log(data);
var newArray = data.map(function (ele, indx) {
    console.log(ele,indx);
    return ele%2===0;
});
console.log(newArray);


//fliter()
let filterdata = data.filter(function (element,index) {
    return element%2===0;
});
console.log(filterdata);
