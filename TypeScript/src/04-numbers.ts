(() => {
  let productPrice = 100;
  productPrice= 12;
  console.log("productPrice", productPrice);

  let customerAge: number = 28;
  customerAge= customerAge + 1;
  //customerAge= customerAge + "1"; 281:  Ya no es un numero, si no un String ;
  console.log("customerAge", customerAge);

  let productInStock:numb er;
  console.log("productInStock", productInStock); // imprimir algo que no ha sido asignado, tiene tipado pero no tiene valor ;

  if (productInStock > 10) {
    console.log("is greater");
    //Al final la variable viene sin nunguna asignacion, error al validar el if
  }
  let discount = parseInt("100");
  console.log("discount", discount);
  if (discount <= 200) {
    console.log("apply");
  } else{
    console.log("no apply");
  }

  let hex = 0xfff;
  console.log("hex", hex);
  let bin = 0b1010;
  console.log("bin", bin);

 const  myNumber: number=10;//no usar el Number sino el number con la N en minuscula;
})();
