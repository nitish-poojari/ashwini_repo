"use strict";
//let t1=document.createElement("p");
//let flag= document.getElementById("5").innerHTML
function calendar() {
    let days = Number(prompt("Enter the number of days for  your month"));
    let weekday = Number(prompt("Enter the weekday  as 0 for Monday, 1 for Tuesday ,2 for Wednesday like wise"));
    console.log('MON TUE WED THUR FRI SAT SUN');
    //const headings=('MON TUE WED THUR FRI SAT SUN')
    //document.getElementById("5").innerHTML=headings
    let your_month = '';
    for (let i = 0; i < weekday; i++) {
        your_month = your_month + '    ';
    }
    for (let j = 1; j <= days; j++) {
        if (j < 10) {
            your_month = your_month + ('  ' + j + ' ');
        }
        else {
            your_month = your_month + (' ' + j + ' ');
        }
        if ((weekday + j) % 7 == 0) {
            your_month = your_month + '\n';
        }
    }
    return your_month;
}
console.log(calendar());
//const cal=(calendar())
//document.getElementById("5_1").innerHTML=cal
//document.write(`${cal}`)
