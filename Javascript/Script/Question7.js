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
//console.log(`The maximum number is ${max}`)
document.getElementById("7").innerHTML =  [`The maximum number is ${max}`]
}

const numbers=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
findMax(numbers)