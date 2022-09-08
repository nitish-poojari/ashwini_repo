"use strict";
function translate(str) {
    // console.log(`Original String:`+str)
    const tran = (`Original String:` + str);
    document.getElementById("9").innerHTML = tran;
    let newStr = " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            newStr = newStr + str[i];
        }
        else if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            newStr = newStr + str[i] + 'o' + str[i];
        }
        else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
//console.log(`rövarspråket String:`+translate('this is fun'))
const trans = (`rövarspråket String:` + translate('this is fun'));
document.getElementById("9_1").innerHTML = trans;
