// what are methods.
// the action which you can perfornm an an object.
//method is a property conatining fxn definition

//let arr = ['sanjeevani', 18]
//console.log(arr);
// array is object;
let name = 'sanjeevani';
let detail = {
    name: 'ssanjeeni',
    age: 18,
    fullName: function () {
        console.log('sanjeevani')
    },
}
detail.fullName();
let maid = {
    task1: "cooking",
    task2: 'cleanings',
    calling: function() {
        console.log('she cooks and clean');
    },
    askTiShop: function () {
        console.log('she shop the groceries for home');
    },
    isPresent: function() {
        console.log('yes');
    }
}
maid.calling();
maid.askTiShop();
maid.isPresent();

// custmen methods
// // anonymous function because this function is not having any name.

let human = {
    doesWalks: function () {
        console.log('yes');
    },
    ifTalks: function () {
        console.log('yes');
    },
    doesFly: function () {
        console.log('no');
    },
    doesSwim: function () {
        console.log('yes');
    }
}
human.doesFly();

// check array or not

let arr = ['sanjeevani', 18]
let arr1 = '2';
let res = Array.isArray(arr);
console.log(res);

//concat()
//merge array
let first = [1, 2, 3, 4];
let sec = [5, 6, 7, 8];
let third = [9, 10, 11, 12];
let merge = first.concat(sec, third);
console.log(first, sec, third, merge);

// join(): join all the element of any array using a separator and it return a string
const value = [12, 3, 4, 5];
const joined = value.join("");
console.log(typeof joined);
console.log(joined);

const joined1 = value.join("-");
console.log(joined1);

// includes(): an element is present inside the array or not
//it return boolean va;lues
const values = [12, 3, 4, 5];
let inc = values.includes(12);
console.log(inc);


// indesOf(): it return the first occurencr of an element in an array
//its tells you the index position of an element
let section = ['ashu', 'Sanjeevani', 'sayali', 'rushi', 'amaradip', 'yogesh', 'ashu'];
let first1 = section.indexOf('sayali');
console.log(first1);
//last
let last = section.lastIndexOf('ashu'); //4
console.log(last);

//lastUndex(): helps find the last occurner of ann element in the array
// if element not present given -1

// reverse(): reverses the position of the elments
let names1 = [1, 2, 3];
console.log(names1.reverse());
console.log(names1);
