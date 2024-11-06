(()=>{
  let myDinamicVar: any;
  myDinamicVar= 100;
  myDinamicVar="hola";
  myDinamicVar= {};
  myDinamicVar=null;
  //ES en parte mala practica; TypeScript es de manera incremental, cambiando archivos en camino

  myDinamicVar ='Hello';
  myDinamicVar. //NO hay contaxto para ayudar y darme opciones despues del  '.'
   const rta =(myDinamicVar as string).toLocaleUpperCase();
   console.log(rta);

   myDinamicVar = 1234 ;
   const rta2 = (<number>myDinamicVar).toFixed();
   //2 formas de transformar  el valor con 'as' o con '<>'

})();
