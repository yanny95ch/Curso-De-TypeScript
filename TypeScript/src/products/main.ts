import {addProduct, calcStock, products} from './product.service';

addProduct({
  title:  'product1',
  createAd: new Date(1993,1,1),
  stock: 5,
});
addProduct({
  title:  'product2',
  createAd: new Date(1993,1,1),
  stock: 6,
  size: 'XL'
});
console.log(products);

const total = calcStock();
console.log('Suma de los Stock: ', total);
