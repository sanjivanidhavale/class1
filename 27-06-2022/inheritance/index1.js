class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  freeCourseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }

  // add the enrolled courses to my courseList
  enrollCourse(name) {
    this.freeCourseList.push(name);
  }

  // get the list of free courses
  getFreeCourseList() {
    return this.freeCourseList;
  }

  login() {
    return "Logged in";
  }

  static getPremiumCourse() {
    return "This is a premium course";
  }
}

class PaidUser extends User {
  constructor(name, email) {
    // used to call the constructor of the parent class, to acces the methods and properties
    super(name, email);
  }
  // method override
  getInfo() {
    return "Im a paid user";
  }

  paidCourseList = [];

  // add the paid courses to list
  enrollPaidCourse(name) {
    this.paidCourseList.push(name);
  }

  // fetch the list of paid courses
  getPaidCoursesList() {
    return this.paidCourseList;
  }
}

const suman = new User("suman", "suman@gmail");
console.log(suman.getPremiumCourse());

const tom = new PaidUser("tom", "tom@gmail");
console.log(tom.getInfo());

// parent class methods
tom.enrollCourse(["web dev beginner course"]);
console.log("free course ->", tom.getFreeCourseList());

// child class methods
tom.enrollPaidCourse(["html basics", "css basics"]);
console.log("paid courses->", tom.getPaidCoursesList());
console.log(tom.getPremiumCourse());
