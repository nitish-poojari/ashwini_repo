const li: any[]=['a','b','c','d','e']
//console.log(li)
const li1:any= (`Before replacing :${li}`);
document.getElementById("13").innerHTML = li1

li.splice(1,1,[1,2,3])
//console.log(li)
const li2:any= (`After replacing :${li}`);
document.getElementById("13_1").innerHTML = li2
