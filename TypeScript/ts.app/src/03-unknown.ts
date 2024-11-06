let anyVar: any;
anyVar= true;
anyVar= undefined;
anyVar= null;
anyVar= 1;
anyVar= {};
anyVar= 'Hola';

let isNew : boolean= anyVar;

anyVar.doSomething();
anyVar.toUpperCase();

//---------------Unknown Type -------------//
let unknownVar: unknown;
unknownVar= true;
unknownVar= undefined;
unknownVar= null;
unknownVar= 1;
unknownVar= {};
unknownVar= 'Hola';
unknownVar= [];

//unknownVar.doSomething();
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}  // Hay que hacer verificacion de tipo, para porder usar las propiedades despues del .

// let isNew2:boolean = unknownVar;  'UNKNOWN solo hace referencia a tipo, mostrandose aqui como un valor definido'

if (typeof unknownVar === 'boolean') {
  let isNew2:boolean = unknownVar;

}

const  parse = (str : 'string'): unknown =>{
  return JSON.parse(str);
}
//JSON.parse('ggfgfgfg')  con   Unknown te fuerzas a validar el tipo y prevenir errores




