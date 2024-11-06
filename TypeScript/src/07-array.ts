(()=>{
  let prices= [1,2,3,4,5,6,7,8,9, 'Hola', true];
  //prices.push("web"); No es numero
  //prices.push(true);
  //prices.push({});
  prices.push(12354);
  prices= [2,5,7,9,9,8,5,6,45];

  let products = ['Hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ["lulu", false];//Con object puedes ingresar tanto objetos como arrays
  mixed.push("asa");
  mixed.push(12);
  mixed.push(true);
  mixed.push([]);
  mixed.push([]);

  let numbers = [2,5,7,9,9,8,5,6,45];
  numbers.map(item => item * 2);

})();


