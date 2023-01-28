var products = [
  {
    brand: "Apple",
    pname: "Iphone 12 Pro",
    price: 110000,
  },
  {
    brand: "Apple",
    pname: "Iphone 13 Pro",
    price: 130000,
  },
  {
    brand: "Apple", 
    pname: "Iphone 11 Pro",
    price: 10000,
  },
  {
    brand: "Samsung",
    pname: "Galaxy ",
    price: 110000,
  },
  {
    brand: "Samsung",
    pname: "Note 9",
    price: 90000,
  },
  {
    brand: "Vivo",
    pname: "vivo A23",
    price: 60000,
  },
];
//console.log(product[0].brand)
 
let filterproducts= products.filter(function (element) {
  return element.brand === 'Apple';
  //Apple = "Apple";
});

console.log(filterproducts);

let filterproductprice= products.filter(function (element) {
  return element.price < 100000;
  //Apple = "Apple";
});

console.log(filterproductprice);