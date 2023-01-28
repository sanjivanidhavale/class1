function fn() {
  //{ }//function block
  var a = 10;
  if (true) {
    //{} block Scope
    var b = 50;
    console.log(a);
  } else {
    console.log(a);
  }

  console.log(a);
  console.log(b);
}

// console.log(a);
// console.log(b);
fn();
