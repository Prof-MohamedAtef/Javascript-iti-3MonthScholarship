






var obj={name:"mohamed", age:29, position:"Senior Android Developer", salary:0.001, location:"North Sinai", city:"El-Arish", nationality:"Egyptian"};

//Factory Function
function Person(name, age, position, salary, location, city, nationality){
    return {name:"Atef", position:"Senior Android Developer", salary:9999999999999, location:"Cairo, fth settlement", city:"cairo", nationality:"Egyptian"};
}

var p1=Person("mohamed atef",29,"Software Engineer", 100000000, "Ismailia, Shebin st", "egyptian");
console.log(p1);

var p2=Person("Mahmoud",35,"Software Developer ", 9999000, "Rome", "Italian"); 
console.log(p2);

//constructor Function
function Person_(name, age, position, salary){
    this.name=name;
    this.age=age;
    this. position=position;
    this.salary=salary;
}

var p3=new Person_("mohamed",13,"student",10);
console.log(p3);