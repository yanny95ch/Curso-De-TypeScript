export class Animal{
    constructor(public name:string){}

    move(){
        console.log('Moving along!');
    }
    greeting(){
        return `Hello, I'm ${this.name}`;
        
    }
}

const fifi = new Animal('fifi');
fifi.move()
console.log(fifi.greeting());

//-----
export class Dog extends Animal{
    constructor (
        name:string,
        public owner:string){
           super(name); //SUPER: para llamar el name del constructor PadreAnimal

        }

    woof(times:number):void{
        for (let index = 0; index < times; index++) {
            console.log('Woof!');  
        }
    }
}

const Azra = new Dog('Azra', 'Luli');
Azra.move()
console.log(Azra.greeting());
Azra.woof(5);
console.log(Azra.owner);




