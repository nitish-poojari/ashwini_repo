"use strict";
function display(tuple_values) {
    let sum = 0;
    for (let i = 0; i < tuple.length; i++) {
        sum += tuple[i];
    }
    //console.log(`sum of tuple: ${sum}`)
    const st = (`sum of tuple: ${sum}`);
    document.getElementById("12_1").innerHTML = st;
}
let tuple = [10, 20, 30, 40, 50];
// console.log(tuple)
const t = (`tuple : ${tuple}`);
document.getElementById("12").innerHTML = t;
display(tuple);