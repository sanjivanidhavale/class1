class A1{
    name = "Geekster";
    display() {
        console.log(this.name);
    }
}
class B1 extends A1{
    //name = "san";
    city = "gurugram";
    print() {
        console.log(this.city);
    }
}
class C1 extends B1{
    city = "temphurni";
    print() {
        console.log(this.city);
    }
}


var b1 = new B1();
b1.display();
b1.print();
b1.name = "sanjeevani";
b1.display();

// parant child class sentax
//extends

var c1 = new C1();
c1.display();
c1.print();
c1.name = "sanjeevani";
c1.display();