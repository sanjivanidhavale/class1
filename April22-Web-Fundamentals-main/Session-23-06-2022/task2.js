// let and var support {variable declaration , Assiging , variable Initialization}
function fn() {
  var a = 10;

  var a = 100;

  console.log(a);
}

fn();

function fn1() {
  var a;
  a = 100;
  var b = 1000;

  let x;
  x = 100;
  let y = 1000;

  const name = "Geekster";
}

// const support only variable Initialization

function fn2() {
  
  const b = 1000;

  const name = "Geekster";
}