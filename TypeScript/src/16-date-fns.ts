 /* import {subDays, format} from 'date-fns';

const date = new Date(1998,1,28); // 0=enero , 1= febrero
const rta = subDays(date,30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str); */



import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 28 de febrero de 1998
const rta = subDays(date, 30); // Resta 30 días
const str = format(rta, 'yyyy/MM/dd'); // Formato correcto

console.log(str);
