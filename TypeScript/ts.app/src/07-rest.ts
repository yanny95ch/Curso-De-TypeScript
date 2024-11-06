import {User, ROLES} from './01-enum'

const currentUser: User = {
  username: 'lulitoByes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = ()=>{
  if (currentUser.role === 'admin') {// o tambien ROLES.ADMIN
    return true
  }
  return false
}

const  rta = checkAdminRole();
console.log('checkAdminRole =',rta);

//-----------------//---------------------

export const checkRole = (rol1: string, rol2: string)=>{
  if (currentUser.role === rol1) {// o tambien ROLES.ADMIN
    return true
  } else   if (currentUser.role === rol2){
  return true
}
  return false
}


const  rta2 = checkRole('admin', 'seller');// (ROLES.ADMIN, ROLES.SELLER)
console.log('checkAdminRole =',rta2);

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('checkRoleV2', rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('checkRoleV2', rta4);


