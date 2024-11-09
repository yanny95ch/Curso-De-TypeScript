//Singleton: Unos de los principios de la arquitectura SONIC, garantiza que solo creemos una instancia de un Objeto, previniendo bloqueo de memoria solo tengamos un punto deaccso unico para esa instancia

export class MyService {

    static instance: MyService | null = null;

    private constructor(public name: string){}

    getName(){
        return this.name;
    }
    static create(name:string){
        if (MyService.instance === null) {
            MyService.instance= new MyService(name);
            console.log('Deberia entrar una vez');
            
        }
        return MyService.instance;
    }
}
const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2= MyService.create('service 2');
console.log(myService2.getName());
const myService3= MyService.create('service 3');
console.log(myService2.getName());

console.log(myService1 === myService2);
//Cada vez nos enviara la misma instancia por lo tanto el resultado sera TRUE