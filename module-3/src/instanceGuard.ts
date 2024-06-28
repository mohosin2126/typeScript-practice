{
    // instance of guard 

    class Animal {

        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log("make sound")
        }
    }
     

class Dog extends Animal {

    constructor(name: string, species: string){
        super(name,species)
    }
    makeBark(){
        console.log("i'm barking!")
    }
}

const getAnimal=(animal: Animal) =>{
    if(animal instanceof Dog){
        animal.makeBark()
    }else{
        animal.makeSound()
    }
   
}

const dog= new Dog("german shepard","dog")

getAnimal(dog)
}