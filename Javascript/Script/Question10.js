function checkOddEven(n1)
{
    
    for(let i=1;i<=n1;i++)
    {
        if(i%2==0)
        {
            //console.log(`${i} is Even Number`)
            document.getElementById("main").innerHTML =  [`${i} is Even Number`]
        }
        else
        {
            //console.log(`${i} is Odd Number`)
            document.getElementById("10").innerHTML =  [`${i} is Odd Number`]
        }
    }
    
}
checkOddEven(10)