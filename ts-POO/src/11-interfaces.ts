//Palabra clave IMPLEMENTS

interface Driver{ //Todo debe ser publico en la implementacion
    database: string;
    password: string;
    port: number

    connect():void;
    disconnect():void;
    isConnected(name:string):boolean;

}

//const driver: Driver = {
    //database: '',
    //password: '',
    //port: 23
//}

class PostgresDriver  implements Driver{ //NO es una herencia es como un contrato donde todos deben cumplir con ese estanadar
    constructor(
        public database: string,
        public password: string,
        public port: number,
        private host: number,
    ){} 
    disconnect(): void {
        //code
    }
    isConnected(name: string): boolean {
        //code
    }
    connect(): void {
        //code
    }
}

class OracleDriver  implements Driver{ 
    constructor(
        public database: string,
        public password: string,
        public port: number
    ){}
    disconnect(): void {
        //code
    }
    isConnected(name: string): boolean {
        //code
    }
    connect(): void {
        //code
    }
}