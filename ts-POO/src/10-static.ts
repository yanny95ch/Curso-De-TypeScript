console.log(Math.PI);
//const Math = new Math();
console.log(Math.max(1,2,3,4,5,6,8,9,45));

class MyMath {
   static readonly PI=3.14;

    static max(...numbers:number[]){
        console.log(numbers);
        return numbers.reduce((max, item)=> max >= item ? max : item, 0);
   }
}
//const math = new MyMath();
//math.PI;
console.log('myMath', MyMath.PI);
//MyMath.PI=121; //Se puede cambiar el valor de PI si solo lo dejamos static  PI=3.14; sin el readonly
console.log('myMath', MyMath.max(12,5,48,6,65,4));
const numbers = [ 21,5,5,6,5647,56,5,6,656,4];
console.log('myMath',MyMath.max(...numbers));


