let s = [1, 2, 3, 4,'apple','baseball'] // store any datatype ex int, strion, oblect, flot etc..
console.log(s);
console.log(s.length);

let todo = ['learn JS', 'play baseball', 'wash your cloths', 'Return the bok library'];
console.log(todo);
console.log(todo[0]);

let information = ['Sanjeevani dhavale', 'Maharashtara', 'Number 9022636232', 'MCA']

console.log(information[0]);

let a = [10, 20, 30, 40, 50];
console.log(a)
// array last element print
console.log(a[a.length - 1]);
console.log(a.at(-1));
console.log(a.at(-2));
console.log(a[a.length - 1], a.at(-1));
console.log("array lenght")
for (let i = 0; i < a.length; i++){
    console.log(a[i]);
}
console.log(a)

for (let i = 0; i <= a.length-1; i++){
    console.log(a[i]);
}

//print array
//i<n, i<=(n-1)
// i < a.length => array length => i < 5
// i <= a.length-1 => array length => i <= (6-1)=5;
console.log("reverse array")
// reverse array
for (let i = (a.length-1); i >= 0; i--){
    console.log(a[i]);
}


