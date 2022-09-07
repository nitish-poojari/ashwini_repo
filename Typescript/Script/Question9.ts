function translate(str:string):string{
    console.log(`Original String:`+str)
 let newStr=" "
    for(let i=0;i<str.length;i++)
    {

         if(str[i]==" "){
          newStr=newStr+str[i]
        }
    
        else if (str[i]!='a' && str[i]!='e' && str[i]!='i'&& str[i]!='o'&&str[i]!='u')
        {
            newStr=newStr+str[i]+'o'+str[i]
        }
        else{
            newStr=newStr+str[i]
        }
    }
    return newStr
}
//console.log(`rövarspråket String:`+translate('this is fun'))
const trans:any=(`rövarspråket String:`+translate('this is fun'));
document.getElementById("9").innerHTML = trans
