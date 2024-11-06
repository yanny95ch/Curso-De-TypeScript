(() =>{

  type userID = string | number ;
  let userId: userID;

  //Literal types
  type  sizes= 'S' | 'M' | 'L' | 'XL' | 'XXL';
  let  shirtSize :   sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'XXL';

  function greeting(userId: userID,  size: sizes){
    if (typeof  userId === 'string') {
      console.log(`string  ${userId.toLowerCase()}`);
    }
  }

  greeting(111, 'S');
  greeting(154554, 'MD')


})();
