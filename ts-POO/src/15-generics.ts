import {Dog} from './09-protected';
    /*function getValue(value:unknown){
    return value; 

}*/
/*function getValue(value:string | number){
    return value; 
}
    */
function getValue<myType>(value:myType){
    const array: myType[]= [value];
    return value; 

}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([12,1,4,5,564]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting
//Promise<boolean>
//axios.get<string[]>