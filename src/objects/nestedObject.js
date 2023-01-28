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
}
console.log(student.address.area.area1);
console.log(student.address.city);
console.log(student.address);

