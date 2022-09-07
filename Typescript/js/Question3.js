"use strict";
const errorResponse = () => {
    return { valid: false, error: 'error occurred' };
};
const validator = (validatorFn) => {
    return errorResponse();
};
console.log(validator(() => errorResponse()).valid); //=> false
console.log(validator().error); //=> 'error occurred'
const val = validator(() => errorResponse()).valid;
document.getElementById("3").innerHTML = val;
const val1 = validator().error;
document.getElementById("3_1").innerHTML = val1;
