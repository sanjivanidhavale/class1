var data = [3,5, 7, 11, 4, 6, 10]
//map
console.log(data);
var newArray = data.map(function (ele, indx) {
    
    if (ele % 2 === 0) {
        return ele + 10;
    } else {
        return ele * 10;
     }
});
console.log(newArray);