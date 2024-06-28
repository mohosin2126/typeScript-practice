{
    //oop -class 

    class animal{
        name:string;
        species:string;
        sounds:string;
        constructor(name:string,species:string,sounds:string){
            this.name=name;
            this.species=species;
            this.sounds=sounds;
        }
makeSound(){
    console.log(this.sounds);
}

    }

const dog= new animal("german shepard bhai","dog","gheu gheu");

const cat =new animal("cat","cat","cat");


}