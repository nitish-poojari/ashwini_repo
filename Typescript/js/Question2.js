"use strict";
const myFunc = (para) => {
    const { firstParam = 'defaultFirst', secondParam = 'defaultSecond' } = para;
    const result = `firstParam : ${firstParam}, secondParam :${secondParam}`;
    return result;
};
//console.log(myFunc({}))
//console.log(myFunc({ firstParam: 'first', secondParam: 'second' }))
//console.log(myFunc({ firstParam: 'first' })) 
//console.log(myFunc({ secondParam: 'second' })) 
const fun = myFunc({});
document.getElementById("2").innerHTML = fun;
const fun1 = myFunc({ firstParam: 'first', secondParam: 'second' });
document.getElementById("2_1").innerHTML = fun1;
const fun2 = myFunc({ firstParam: 'first' });
document.getElementById("2_2").innerHTML = fun2;
const fun3 = myFunc({ secondParam: 'second' });
document.getElementById("2_3").innerHTML = fun3;
