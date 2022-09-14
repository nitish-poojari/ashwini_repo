"use strict";
function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercase = s.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) < 0) {
            return (`"${s}" is not a panagram`);
        }
    }
    return (`"${s}" is a pangram`);
}
//console.log(pangrams('The quick brown fox jumps over the lazy dog'))
const out = (pangrams('The quick brown fox jumps over the lazy dog'));
document.getElementById("8").innerHTML = out;
// console.log(pangrams('Hi This is Ashwini'))
const out1 = (pangrams('Hi This is Ashwini'));
document.getElementById("8_1").innerHTML = out1;
