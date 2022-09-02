// 1)

function addition(num1,num2)
{
 return num1+num2
 
}
add=addition(3,2)
console.log(`Addition of 3 and 2 = ${add}`)

add=addition(-3,-6)
console.log(`Addition of -3 and -6 = ${add}`)

add=addition(7,3)
console.log(`Addition of 7 and 3 = ${add}`)
//-----------------------------------------------------------------

// 2) 

function circuitPower(volt,current)
{
    return volt*current
}

power=circuitPower(230,10)
console.log(`Power = ${power}`)

power=circuitPower(110,3)
console.log(`Power = ${power}`)


power=circuitPower(480,20)
console.log(`Power = ${power}`)
//-----------------------------------------------------------------

 // 3)

  function convert(min){
    let seconds= min*60
    console.log(`seconds= ${seconds}`)
      
  }
  convert(5)
  convert(3)
  convert(2)
//-----------------------------------------------------------------

  // 4) 

  function triArea(p1,p2){
    let area= (1/2)*(p1*p2)
    console.log(`triArea= ${area}`)
      
  }
  triArea(3,2)
  triArea(7,4)
  triArea(10,10)
 //-------------------------------------------------------------------

  // 5)  

  function calcAge(years)
  {
    return years*365
   }

  days=calcAge(65)
  console.log(`65 years = ${days} days`)

  days=calcAge(0)
  console.log(`0 years = ${days} days`)

  days=calcAge(20)
  console.log(`20 years = ${days} days`)
//-------------------------------------------------------------------

 // 6)

  function swap(n1,n2)
  {
     let n3=n1
     n1=n2
     n2=n3

     console.log(`n1: ${n1} , n2: ${n2}`)
  }

  swap(10,20)
//---------------------------------------------------------------------

// 7)
function findMax(numbers)
{
let max=numbers[0]
for (let i=0;i<numbers.length;i++)
{
    if (numbers[i]>max)
    {
        max=numbers[i]
    }
}
console.log(`The maximum number is ${max}`)
}

const numbers=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
findMax(numbers)
//----------------------------------------------------------------------

// 8)

function findMin(numbers1)
{
let min=numbers1[0]
for (let i=0;i<numbers1.length;i++)
{
    if (numbers1[i]<min)
    {
        min=numbers1[i]
    }
}
console.log(`The minimum number is ${min}`)
}

const numbers1=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
findMin(numbers1)
//---------------------------------------------------------------------

// 9)
function isfizzBuzz(num)
{
    if(`${typeof(num)}`!='number')
    {
        console.log("Nan Not a Number! Please Input Number")
    }

    else
    {
        

        if (num%3==0 && num%5==0)
        {
            console.log('FizzBuzz')
        }
        else if(num%3==0)
        {
            console.log('Fizz')
        }

        else if(num%5==0)
        {
            console.log('Buzz')
        }
        else{
            console.log(`some odd number entered:${num}`)
        }
    }
}

isfizzBuzz('one')
isfizzBuzz(true)
isfizzBuzz(9)
isfizzBuzz(10) 
isfizzBuzz(30)
isfizzBuzz(11)
//----------------------------------------------------------------------------

//10)
function checkOddEven(n1)
{
    
    for(let i=1;i<=n1;i++)
    {
        if(i%2==0)
        {
            console.log(`${i} is Even Number`)
        }
        else
        {
            console.log(`${i} is Odd Number`)
        }
    }
    
}
checkOddEven(10)
//------------------------------------------------------------------------------

// 11) 
function sum0fMultiples(n1)
{
    let sum=0
    for(let i=1;i<=n1;i++)
    {
        if(i%3==0 || i%5==0)
        sum=sum+i
        
    }
    console.log(`sum0fMultipleValue of 3 & 5 upto 10 digit is:${sum}`)

}
sum0fMultiples(10)
//--------------------------------------------------------------------------

// 12) 
function showPattern(num)
{
    let string=''
    for(let index=1;index<=num;index++)
    {
        for(let index1=0;index1<index;index1++)
        {
          string+= '*'
        }
        string+= '\n'
    }
     console.log(string)
}

showPattern(5)
//---------------------------------------------------------------------------

// 13 //
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
    console.log("Grade: D")
  }

  if(avg<=70 && avg>=79)
  {
    console.log("Grade: C")
  }

  if(avg>=81 && avg<=89)
  {
    console.log("Grade: B")
  }

  if(avg>=91 && avg<=100)
  {
    console.log("Grade: A")
  }
}

const marks=[55, 85, 55, 65]
calculateGrades(marks)
//-------------------------------------------------------------------------

//14//
function showPrimeNumbers(num)
{
for (let i=2;i<=num;i++)
{ 
    let flag=0
    for (let j=2;j<i;j++)
    {
        if(i%j==0)
            {
                flag=1
            }
        
    }
    if(flag==0)
        {
            console.log(` Prime number:${i}`)
        }
}
}

showPrimeNumbers(20)


