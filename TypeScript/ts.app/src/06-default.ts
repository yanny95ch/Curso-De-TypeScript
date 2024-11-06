export const createProduct = (
  id: string | number,
  isNew: boolean =true,
  stock: number= 10,

)=>{
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}


const  p1 = createProduct(1, true, 12);
console.log(p1);
//Consola { id: 1, stock: 12, isNew: true }

const  p2 = createProduct(1, true);
console.log(p2);
//Consola { id: 1, stock: undefined, isNew: true }

const  p3 = createProduct(1);
console.log(p3);

const  p4 = createProduct(1, false,0);
console.log(p4);


const  p5 = createProduct(1, true,100);
console.log(p5);


