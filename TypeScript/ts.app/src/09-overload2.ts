//Nico => [N,i,c,o] => string => string[]
//[N,i,c,o] =>Nico => string [] => strin

export function parseSrt(input: string): string[];
export function parseSrt(input: string[]): string;
export function parseStr(input: number): boolean;

//export function parseSrt(input: string | string[]): string | string[]{
  //if (Array.isArray(input)) {
   // return input.join(''); //string
  //}else{
   // return input.split(''); //string[]
 /// }
//}

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}
const rta1Array = parseSrt('Lulito');
rta1Array.reverse();
//if (Array.isArray(rta1Array)) {
 // rta1Array.reverse
//}
console.log('rta1Array =', 'Lulito =>' , rta1Array);


const rta2String = parseSrt (['A','z','r','i','e','t','a']);
//rta2String.toLowercase();
//if (typeof rta2String === 'string') {
  //rta2String.toLowerCase();
//}
console.log('rta2String = ', "['A','z','r','i','e','t','a'] =>", rta2String);


const rtaBoolean = parseStr(12);
