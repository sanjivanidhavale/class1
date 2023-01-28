// var student = {
//     name: "sanjeevani",
//     result: function (a, b) {
//         var num1 = a;
//         var num2 = b;
//         console.log(num1 + num2);
//         console.log("Passed")
//     },
//     marks: [70,50,60,80,40]
// };
// student.result(20, 30);
// console.log(student.marks);
// console.log(student.marks[2]);

var student = {
    name: "sanjeevani",
    result: function (a, b) {
        let sum = 0;
        var num1 = a;
        var num2 = b;
        sum = num1 + num2;
        console.log(num1 + num2);
        if(sum>35){
            console.log("Passed");
        } else {
            console.log("Fail");
        }
    },
    marks: [70,50,60,80,40]
};
student.result(20, 5);
console.log(student.marks);
console.log(student.marks[2]);