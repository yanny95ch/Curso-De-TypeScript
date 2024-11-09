//Es una forma de restringir la creacion de Objetos, de las clases bases o las clases Padre  //export  abstract class Animal en 09, nos indica que no se puede crear 

import {Animal,Dog} from './09-protected';

const animal = new Animal('elite');
animal.greeting();

const lulito = new Dog('lulito', 'Pool');
lulito.greeting();
lulito.woof(2);