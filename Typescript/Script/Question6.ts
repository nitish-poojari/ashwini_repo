//const n = 20

let tag=document.createElement("p");



let flag1= document.getElementById("6").innerHTML
function factorial (n:number):number {
    if (n == 0) 
         return 1
    return n * factorial(n - 1)
  }
 
  function main():void {
    for( let i =1;i<=20;i++){
       let output=factorial(i)
      //console.log(output)
      // const out:any=(output) ;
      //document.getElementById("6").innerHTML = out
      document.write(`${output} <br>`)
   
   
    }
  }
  main()