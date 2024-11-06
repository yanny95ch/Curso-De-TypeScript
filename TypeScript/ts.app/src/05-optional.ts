export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
  //Los parametros opcionales ? deben ir al final.
)=>{
  return {
    id,
    //stock: stock  || 10,
    stock: stock  ?? 10,
    //isNew: isNew || true
    isNew: isNew ?? true
  }
}
//createProduct(1,true,12);

const  p1 = createProduct(1, true, 12);
console.log(p1);
//Consola { id: 1, stock: 12, isNew: true }

const  p2 = createProduct(1, true);
console.log(p2);
//Consola { id: 1, stock: undefined, isNew: true }


const  p3 = createProduct(1);
console.log(p3);
//Consola  { id: 1, stock: 10, isNew: true }
/* Tengamos en cuenta que En JavaScript
  0 === false
  '' === false
  false === false
  Es decir si envianmos cualquiera de estos valores TypeScript los va a  detectar como FALSE
*/

const  p4 = createProduct(1, false,0);
console.log(p4); //Aplica el ejemplo de JavaSvascrip  si tenemos  //stock: stock  || 10 y //isNew: isNew || true no arrojara la consola { id: 1, stock: 10, isNew: true }



