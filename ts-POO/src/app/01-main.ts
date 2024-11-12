import axios from 'axios';

import {Products} from './models/product.model';

let anyVar:any =12; //Para evitar esto usariamos unknown para que nos piuda validacion de tipos
let booVar: boolean= anyVar;

(async()=>{

async function getProducts(){
    const {data} = await axios.get<Products[]>('https://api.escuelajs.co/api/v1/products');
    return data
}
 
const products = await getProducts();
console.log(products.map(item => `${item.id} - ${item.title}`));
})();