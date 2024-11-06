(()=>{
  type sizes = 'S' | 'M' | 'L' | 'XL';
  function  createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: sizes,
  ){
    return{
      title,
      createAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson('p1',new Date(),12 , 'M')
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);

//************************
/* (parametrs) =>{
  retrno...
}    */
const createProductToJsonV2 = (
  title: string,
  createAt: Date,
  stock: number,
  size?: sizes,
) => {
  return{
    title,
    createAt,
    stock,
    size
  }
}
const product2 = createProductToJsonV2('p2',new Date(),12)
console.log(product2);
console.log(product2.title);
console.log(product2.stock);
})();
