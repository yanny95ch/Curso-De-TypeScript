export class MyDate {
   constructor(
           public year: number = 1993, 
           public month:number= 7, 
           private _day:number=9, // No se puede acceder ni modificar myDate.day =12 para consola
       ){}
   
       printFormat(): string{
           const day = this.addPadding(this._day);
           const month = this.addPadding(this.month);
           return `${day}/${month}/${this.year}`;
       }
   
       private addPadding(value:number){
           if (value < 10) { 
               return `0${value}`; 
             }
           return `${value}` 
       }
   
       add(amount:number, type:'days'|'months'|'years'){
           if (type === 'days') {
               this._day += amount;
           } 
           if (type === 'months') {
               this.month += amount;
           } 
           if (type === 'years') {
               this.year += amount;
           }
       }
       get day(){ 
            //code
           return this._day;
       }
       get isLeapYear(): boolean{
        if(this.year % 400 === 0) return true;
        if(this.year % 100 === 0) return false;
        return this.year % 4 === 0
       }

       //get myReturn(): void{}   los Getters deben devolver algo, retornar no puede ser vacio es decir no retornanr nada 
   }
   
    const myDate = new MyDate(1993,7,3);
    console.log(myDate.printFormat());  //03/07/1993
    //console.log(myDate.getDay());
    console.log(myDate.day);
    ;  //METODO GET: Es una funcion aque accede al valor interno de nuestra propiedad privada, diferente a myDate.day=12; que no se prodria hacer, solo si estiviera como PUBLIC, pero la encontramos PRIVATE
    console.log(myDate.isLeapYear);

    const myDate2 = new MyDate(2000,7,3);
    console.log(myDate2.isLeapYear);

    const myDate3 = new MyDate(2001,7,3);
    console.log(myDate3.isLeapYear);

    const myDate4 = new MyDate(2004,7,3);
    console.log(myDate4.isLeapYear);
    
