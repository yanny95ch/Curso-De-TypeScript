
export class MyDate {
    constructor(
            public year: number = 1993, 
            private _month:number= 7, 
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
                this._month += amount;
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
    
        get month(){
            return this._month;
        }

        set month(newVAlue:number){ //Puede agregar codigo antes que se haga cualquier modificacion
            if (newVAlue >= 1 && newVAlue <= 12) {
                this._month = newVAlue //Recordemos que setters no retorna, no deber retornar, solo asigna un valor
            }else{
                throw new Error('mont out of range');
            }
            
        }
    }
    
     const myDate = new MyDate(1993,7,3);
     console.log(myDate.printFormat());  //03/07/1993
     myDate.month=4;
     console.log('Run',myDate.month);
     myDate.month=78;
     console.log('Run',myDate.month);

     
  