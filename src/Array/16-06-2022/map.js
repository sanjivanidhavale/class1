var data = [30, 20, 50, 80, 4, 60, 5]
//console.log(data);
var newArray = data.map(function (element, indx) {
    console.log(element,indx);
    return element + 10;
});
console.log(newArray);
