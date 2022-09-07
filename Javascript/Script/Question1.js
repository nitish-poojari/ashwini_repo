function addition(num1,num2)
{
 return num1+num2
 
}
add=addition(3,2)
//console.log(`Addition of 3 and 2 = ${add}`)
document.getElementById("1").innerHTML =  [`Addition of 3 and 2 = ${add}`]

add=addition(-3,-6)
//console.log(`Addition of -3 and -6 = ${add}`)
document.getElementById("1").innerHTML =  [`Addition of -3 and -6 = ${add}`]

add=addition(7,3)
//console.log(`Addition of 7 and 3 = ${add}`)
document.getElementById("1").innerHTML = [`Addition of 7 and 3 = ${add}`]