function showPattern(num)
{
    let string=''
    for(let index=1;index<=num;index++)
    {
        for(let index1=0;index1<index;index1++)
        {
          //string+= '*'
         document.write('*')
        }
        //string+= '<br/>'
        document.write('<br/>')
    }
   // console.log(string)
    //document.getElementById("main").innerHTML = [string]
   
}

showPattern(5)