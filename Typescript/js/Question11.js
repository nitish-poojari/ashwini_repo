"use strict";
function swap(nlist) {
    const len = nlist.length;
    let temp = nlist[0];
    nlist[0] = nlist[len - 1];
    nlist[len - 1] = temp;
    const Asn = (`After swapping : ${nlist}`);
    document.getElementById("11_1").innerHTML = Asn;
    // console.log(`After swapping : ${nlist}`)
}
const nlist = [1, 2, 3, 4, 5, 6];
//console.log(`Before swapping : ${nlist}`)
const Bsn = (`Before swapping : ${nlist}`);
document.getElementById("11").innerHTML = Bsn;
swap(nlist);