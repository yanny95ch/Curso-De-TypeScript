
//"target": "es2016" :  es6 - estandar de clases que ya soporta JacaScript, si se envia con 'ES5' o inferior lo hace con funciones
const date = new  Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date);
console.log(date2);

//-----------------
let myVAr;
class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month:number, day:number){
        this.year= year;
        this.month= month;
        this.day=day;
    }
}

const myDate = new MyDate(2024, 4 , 23)
console.log(myDate);

