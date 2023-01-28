// callback function
// Any function which is passed as a argument that function is called callback function.
// it is higher order function;

function fnCallback(printName) {
    printName();
    console.log("I'm from main Fubction")
    printName();
}
fnCallback(function () {
    console.log('I AM Sanjeevani')
});