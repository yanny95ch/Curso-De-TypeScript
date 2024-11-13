import axios from 'axios';

import {Category}from '../models/category.model';
import { Products } from '../models/product.model';

export class BaseHttpService<TypeClass> {
   // data : TypeClass[]=[];
   constructor(
    private url: string
   ){};


    async getAll(){
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }
}

//const service = new BaseHttpService<string>();
//service.getAll();

//const service1 = new BaseHttpService<number>();
//service1.getAll



(async()=>{
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Products>(url1);

    const rta = productService.getAll();
    console.log(rta);

    const CategoryService = new BaseHttpService<Category>(url1);

const rta = productService.getAll();
console.log(rta);



})();