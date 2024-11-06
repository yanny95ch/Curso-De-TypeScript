(()=>{
  //let myDinamicVar: any;   Restrictivo
  let userId: string  | number;
  userId= 2123;
  userId= 'Hola';

  function greeting (mytext: string  | number){
    if (typeof mytext === 'string'){
      console.log(`string ${mytext.toLowerCase()}`);
    }else{
      console.log(`number ${mytext.toFixed(1)}`);

    }
  }
  greeting('asa');
  greeting(4561.2135468765);
})();
