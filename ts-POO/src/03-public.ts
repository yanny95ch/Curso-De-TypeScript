export class MyDate {
    year: number;
    month: number;
    day: number; // readonly day: number;  utilizando readonly se protegeria pero fallaria tanto desde afuera como internamente  

    constructor(year: number, month:number, day:number){
        this.year= year;
        this.month= month;
        this.day=day;
    }

    printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`;
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
}
//Acceso Publico se puede accedes a day o modificarlo 
 const myDate = new MyDate(1993,7,3);
 console.log(myDate.day);
 myDate.day = 12;
 console.log(myDate.day);
  //console.log(myDate.year);
 //console.log(myDate.month);
 