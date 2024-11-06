import { add } from "date-fns";

(()=>{
  /*const login = (email: string, password:string)=>{
    console.log(email,password);
  }
  login('lulito@yahoo.es', 'dsfsfdf98');
 en vez de enviar parametro por parametro se enviara un objeto*/

 const login = (data: {email:string,  password: number})=>{
  console.log(data.email, data.password);
  }
  login({
  email: 'lulito@yahoo.es',
  password: 35458485464})

  //---------------------------------------//
  type  sizes= 'S' | 'M' | 'L' | 'XL' | 'XXL';

  const products: any[]= [];

  const addProduct =(data:{
  title:  string,
  createAd: Date,
  stock: number,
  size?: sizes
  }) => {
   products.push(data);
  }
  addProduct({
    title:  'product1',
    createAd: new Date(1993,1,1),
    stock: 12,
  });
  addProduct({
    title:  'product1',
    createAd: new Date(1993,1,1),
    stock: 12,
    size: 'XL'
  });

console.log(products);


 })();
