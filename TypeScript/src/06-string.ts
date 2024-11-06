(()=>{
  let productTitle=  " My amazing Product";
  //productTitle= 123;
 // productTitle= true
 productTitle= " My amazing product changed";
 console.log("productTittle", productTitle);

 const productDescription = '  hola mundo ';
 console.log('productDescription', productDescription);

 let productPrice = 100;
 let isNew: boolean= false;

const summary = `
  title: ${productTitle}
  descritopn: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
`
console.log("summary", summary)
})();
