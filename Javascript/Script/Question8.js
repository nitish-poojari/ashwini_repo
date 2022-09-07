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
//console.log(`The minimum number is ${min}`)
document.getElementById("8").innerHTML =  [`The minimum number is ${min}`]
}

const numbers1=[10, 21, 5, 25, 6, 60, 23, 26, 49, 98]
findMin(numbers1)