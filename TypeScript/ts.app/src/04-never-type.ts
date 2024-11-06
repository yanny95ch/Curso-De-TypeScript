const withouEnd = () => {
  while (true){
    console.log('Nunca pares de Aprender');
  }
} // Funcion Never-Type

const fail = (message:string) => {
  throw new Error(message);
}

const example: any = (input: unknown) =>{
  if(typeof input === 'string'){
    return ' es un string';
  }else if (Array.isArray(input)){
    return 'es un array';
  }
  return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,3,4,5,6,5]));
console.log(example(1212));
console.log(example('Hola despues de Fail'));

//ESte tipo de dato  permite encontrar  las  ;Funciones detiene la ejecucion o  nunca paran
