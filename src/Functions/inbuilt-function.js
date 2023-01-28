//Interations : alert, Prompts and confirm

//alert
// syntax: alert(message);
//it has only one option is 'ok'


// alert('Hello');

//prompt
//syntax: Prompt(title, defaultValue)

// prompt is used to take the user input
// we have two option is 'ok', 'cancle'
// on clicking OK => we get a value
// on clicking cancel => null value

// // let age = prompt('what is yours age?');
// let age = prompt('what is yours age?',2);
// console.log(age);
// if(age>=18) {
//     console.log(" eligible in voting")
// }else{
//     console.log("not eligible voting")
// }


// let age1 = prompt('what is yours age?',2);
// console.log(age1);
// if(age1>=18) {
//     alert(" eligible in voting")
//     console.log(" eligible in voting")
// }else{
//     alert("not eligible voting")
//     console.log("not eligible voting")
// }


//confirm
// syntax: confirm(message)

// confirm has two options: 'ok', cancel
// cancel return false
// ok return true

// let value1 = confirm('Is your age more than 18?')
// console.log(value1)


// let value = confirm('Is your age more than 18?')
// if(value>=18) {
//     alert("eligible in voting")
//     console.log(" eligible in voting")
// }else{
//     alert("not eligible voting")
//     console.log("not eligible voting")
// }
