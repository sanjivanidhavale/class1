class Student {
  id;
  name;
  city;

  constructor() {
    this.id = 0;
    this.name = "";
    this.city = "";
  }

  display() {
    console.log(this.id, this.name, this.city);
  }
}

var s1 = new Student(); // spcial method constructor Student()
s1.id = 101;
s1.name = "Geekster";
s1.city = "Delhi";

s1.display();

var s2 = new Student();
s2.id = 102;
s2.name = "sanjeevani";
s2.city = "Maharashtra";

s2.display();
