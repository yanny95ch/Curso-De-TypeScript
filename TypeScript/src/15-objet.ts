(()=>{
  type  sizes= 'S' | 'M' | 'L' | 'XL' | 'XXL';
  type Product = {
    title:  string,
    createAd: Date,
    stock: number,
    size?: sizes
  };
  const products: Product[]= [];

  const addProduct =(data:Product) => {
  products.push(data);
  }

  addProduct({
    title:  'product1',
    createAd: new Date(1993,1,1),
    stock: 12,
  });
  addProduct({
    title:  'product2',
    createAd: new Date(1993,1,1),
    stock: 12,
    size: 'XL'
  });

//Agregar objetos cambiando del ejemplo anterior el Any, por Product para reutilizar codigo
products.push({
  title:  'product3',
  createAd: new Date(1993,1,1),
  stock: 72,
  size: 'L'
});
console.log(products);

})();
