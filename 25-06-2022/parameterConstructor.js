class mobileBrand {
    brandName;
    modelName;
    price;
    //parameterixed constructior
    constructor(x,y,z) {
        this.brandName = x;
        this.modelName =y;
        this.price =z;
    }
    display() {
        console.log(this.brandName, this.modelName, this.price);
    }
}
var apple = new mobileBrand('apple','Iphone','price');
apple.display()

var Oneplace = new mobileBrand('oneplce', 'max13pro', 'price');
Oneplace.display();