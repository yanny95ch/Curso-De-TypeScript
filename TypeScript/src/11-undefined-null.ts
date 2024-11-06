(() => {
  //let myNumber: number = undefined;
 // let myString : string = null;
 // let myNull: null;  //Quedan como tupo Any
 // let myUndefined: undefined; //Quedan como tupo Any

  let myNull : null= null;
  let myUndefined: undefined= undefined;

  let myNumber: number | null = null; //SE puede cambiar el valor definido inicialmente
  myNumber= 12;

  let myString: string | undefined= undefined;//SE puede cambiar el valor definido inicialmente
  myString= 'Hola';

  function hi(name: string |  null){
    let hello= 'Hola';
    hello +=  name?.toLowerCase() || 'Nobody'; //Mejor que el condicional
    /*if (name) {
      hello += name;
    }else{
      hello += ' nobody';
    }*/
    console.log(hello);
  }
  hi(' Luli');
  hi(null);
  hi('Pepe');//opcionl
})();
