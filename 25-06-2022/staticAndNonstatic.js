//Electronic Category7

class products{
    name; price;
    qty;
    totalAmount;
    static Category;

    constructor(name, price,qty,totalAmount,Category) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.totalAmount = totalAmount;
        products.Category = Category;
    }

    displayDetails() {
        console.log(this.name, this.price, this.qty, products.Category);
    }
    calculetTotalAmount() {
        this.totalAmount = this.price * this.qty;
        console.log(this.totalAmount);
    }
    //errer
    static print(){
        console.log(products.Category);
        console.log(this.name);
        console.log(this.price);

        //this.displayDetails()
    }
}


var mobilePriduct = new products("iphone 12", 80000, 3,0, "Electronic");
mobilePriduct.calculetTotalAmount();
mobilePriduct.displayDetails();

var laptopPriduct = new products("mak pro", 240000, 4,0, "Electronic");
laptopPriduct.calculetTotalAmount();
laptopPriduct.displayDetails();

products.Category = "Elect";

mobilePriduct.price = 100000;
mobilePriduct.displayDetails();
laptopPriduct.displayDetails();

console.log("________________________________");
products.print();

// category = electronic
// static category means category is same data
// nonsatic
// non static means different category data.

//var mobilepriduct = new products("iphone pro 12", 130000, 4.0, "Electronic");
//var jewellary = new products("ring", 230000, 4, 'jewellary');


