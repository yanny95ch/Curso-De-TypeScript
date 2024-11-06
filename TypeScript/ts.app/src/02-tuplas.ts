const  prices:(number | string)[] = [1,2,3,4,5,6, 'Hello'];
prices.push(1);
prices.push('asa');

let user:[string, number];
user = ['lulito93', 15];
//user = [15, 'lulito93']; NO respeta el orden de asignacion
user = ['Azra', 3];

//user = [];  Deben ser 2 elementos
//user= ['Lulito'];  Deben ser 2 elementos
//user= ['nico', 12, true];Deben ser 2 elementos

const [username,age] = user;
console.log(username);
console.log(age);



