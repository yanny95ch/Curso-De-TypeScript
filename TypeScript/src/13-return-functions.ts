(()=>{
  const calcTotal = (prices:number[]):string  =>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
    //De forma explicita llamando el string
  }

  const  printTotal =(prices:number[]): void=>{
    const rta2 = calcTotal(prices);
    console.log(`el total es ${rta2}`);
  }
  printTotal([1,5,7,9,36,5,3])


})();
