class user {
    constructor(name, email) {
        this.name = name;       //this keyword creat new object.
        this.email = email;
    }
    FreeCourcesList = [];
    getInfo() {
        return {
            name: this.name, email: this.email
        };
    }
    enrollCource(name) {
        this.FreeCourcesList.push(name);
    }
    getFreeCourcesList() {
        return this.FreeCourcesList;
    }
    login() {
        return 'logged in';
    }
}
class paidUser extends user{
    constructor(name, email) {
        //used to call the constructor of the parent class, to acces the methos ant properties;
        super(name, email);
    }
    // // function overriding // method overrinding
    // getInfo() {
    //     return `paid user : ${this.name}: ${this.email}`;
    // }

    paidCourseList=[];
    enrollpaidCourse(name) {
        this.paidCourseList.push(name);  
    }
    getpaidCourseList() {
        return this.paidCourseList;
    }
}
console.log(user.prototype)
user.prototype.postpaidCourceslist = function () {
    return 'we dont have post paid courcese now'
}

console.log(sanjivani.postpaidCourceslist());//prototype inheratience
const sanjivani = new user('sanjeevani', 'sanjeevanidhavale55@gmail.com');
console.log(sanjivani.getInfo());

sanjivani.enrollCource(['web dev courcess', 'java developer', "paython basics"])
console.log(sanjivani.getFreeCourcesList());

const tom = new paidUser('tom','tomgmail');
console.log(tom.getInfo());
// //parent class methods
tom.enrollCource(['DSA Course', " Advance Java"]);
console.log('free course', tom.getFreeCourcesList());
//console.log('free course,','parant class method',tom.getFreeCourcesList());

// child class methods
tom.enrollpaidCourse(['htmlbascis', 'css bsaice']);
console.log('paid course' ,tom.getpaidCourseList());
//console.log(tom.getpaidCourseList());
console.log(tom.getprionCourese());