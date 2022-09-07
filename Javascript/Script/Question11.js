function sum0fMultiples(n1)
{
    let sum=0
    for(let i=1;i<=n1;i++)
    {
        if(i%3==0 || i%5==0)
        sum=sum+i
        
    }
    //console.log(`sum0fMultipleValue of 3 & 5 upto 10 digit is:${sum}`)
    document.getElementById("11").innerHTML =  [`Sum of Multiple Value of 3 & 5 upto 10 digit is:${sum}`]

}
sum0fMultiples(10)