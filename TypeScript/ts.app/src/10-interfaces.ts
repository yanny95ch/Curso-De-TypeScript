type Sizes = 'S'|'M'|'L'|'XL';

//type Product ={
  //id: string | number,
 // title: string,
 // creatAt: Date,
 // stock: number,
 // size? : Sizes
//}
interface Product {
  id: string | number,
  title: string,
  creatAt: Date,
  stock: number,
  size? : Sizes
}

const products: Product[] = [];
products.push({
  id: '1',
  title: 'p1',
  creatAt: new Date(),
  stock: 90
})


const addProduct = (data: Product) => {
  products.push(data);
}
