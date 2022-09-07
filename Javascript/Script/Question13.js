function calculateGrades(marks)

{
    let sum=0
  for ( const value of marks )
  {
     sum=sum+value;
  }
  //console.log(`sum of Marks is ${sum}`)
  avg=sum/marks.length
 // console.log(`Average of Marks is ${avg}`)
  if(avg>=0 && avg<=70)
  {
    //console.log("Grade: D")
    document.getElementById("13").innerHTML =  [`Grade: D`]
  }

  if(avg<=70 && avg>=79)
  {
    //console.log("Grade: C")
    document.getElementById("13").innerHTML =  [`Grade: C`]
  }
  

  if(avg>=81 && avg<=89)
  {
    //console.log("Grade: B")
    document.getElementById("13").innerHTML =  [`Grade: B`]
  }
  

  if(avg>=91 && avg<=100)
  {
    //console.log("Grade: A")
    document.getElementById("13").innerHTML =  [`Grade: A`]
  }
}  


const marks=[55, 85, 55, 65]
calculateGrades(marks)