export class MyDate {
    year: number;
    month: number;
     private day: number;  //Utiliczando Private no se podria ni IMPRIMIR ni MODIFICAR, la propiedad

    constructor(year: number, month:number, day:number){
        this.year= year;
        this.month= month;
        this.day=day;
    }

    printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value:number){
        if (value < 10) { 
            return `0${value}`; //Se inica con cero, para convertir en String
        }
        return `${value}` //return  value ; termina en un String y para valores menores de cero les adiciona 0 
    }

    add(amount:number, type:'days'|'months'|'years'){
        if (type === 'days') {
            this.day += amount;
        } 
        if (type === 'months') {
            this.month += amount;
        } 
        if (type === 'years') {
            this.year += amount;
        }
    }
    getDay(){ //Publico
        return this.day;
    }
}

 const myDate = new MyDate(1993,7,3);
 console.log(myDate.printFormat());  //03/07/1993
 //myDate.addPadding(12); private addPadding() EXternamente ya no funciona con private
 console.log(myDate.getDay());
 

