
//nicher je class gulo common ache sugulo diye amra ekta class declare korte pari bar bar nah likhar jonnno 

class Parent {
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    takeClass(){
        console.log(`${this.name} is taking class`);
    }
}
    // inheritance 
    class Student extends Parent {
        constructor(name:string,age:number,address:string){
          super(name,age,address); 
        }
        getSleep(){
            console.log(`${this.name} is sleeping`);
        }
    }
const student1=new Student("Student",20,"uganda");

// another one 
class teacher extends Parent {

    constructor(name:string,age:number,address:string){
        super(name,age,address);
    }
    takeClass(){
       
    }
}
const teacher1=new teacher("teacher",20,"uganda");


