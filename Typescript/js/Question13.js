"use strict";
const li = ['a', 'b', 'c', 'd', 'e'];
//console.log(li)
const li1 = (`Before replacing :${li}`);
document.getElementById("13").innerHTML = li1;
li.splice(1, 1, [1, 2, 3]);
//console.log(li)
const li2 = (`After replacing :${li}`);
document.getElementById("13_1").innerHTML = li2;
