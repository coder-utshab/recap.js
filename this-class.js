class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    morning(){
        console.log(`she is a student ${this.name}`)
    }
}
const sajib = new Person('sajib Biswas',24)
console.log(sajib)
sajib.sleep();

const dipto = new Person('parul university',26)
dipto.sleep();

const shuvo = new Person('she is a bangladesshi',32)
shuvo.morning();