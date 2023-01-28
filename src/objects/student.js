var student = {
    id: 101,
    name: "sanjeevani",
    phone: 9022636232,
    address: {
        city: "Solapur",
        state: "Maharashtra",
        pincode: 413210,

        area: {
            area1: "tembhurni",
            area2: "pimpalner"
        }
    },
    email: "dhavale488@gmail.com",
    marks: [
        {
            sname: "HTML",
            score: 80,
            length: 1
        },
        {
            sname: "CSS",
            score: 50,
            length: 2
        },
        {
            sname: "JavaScript",
            score: 70,
            length: 3
        },
        {
            sname: "Java",
            score: 60,
            length: 4
        },
    ]
}
    // console.log(student.address.area.area1);
    // console.log(student.address.city);
    // console.log(student.address);

// console.log(student.marks.length);
// console.log(student.marks[0].length);

console.log(student.marks[2].score);
console.log(student.marks[2].sname);