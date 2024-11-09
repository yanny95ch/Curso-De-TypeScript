export  abstract class Animal{
    constructor(protected name:string){}  //Protected, no se puede modificar; pero si se puede heredar

    move(){
        console.log('Moving along!');
    }
    greeting(){
        return `Hello, I'm ${this.name}`;
        
    }
     protected doSomething(){
        console.log('dooo');
    }
}


export class Dog extends Animal{
    constructor (
        name:string,
        public owner:string){
           super(name); //SUPER: para llamar el name del constructor PadreAnimal

        }

    woof(times:number):void{
        for (let index = 0; index < times; index++) {
            console.log(`Woof! ${this.name}`);  
        }
        this.doSomething();
    }

    move(){
        console.log('Moving as a Dog');
        super.move();
        
    }
}

const Azra = new Dog('Azra', 'Luli');
//Azra.name='Otro Nombre'
Azra.woof(2);
//Azra.doSometing();
Azra.move();