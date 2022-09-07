interface CustomResponse {
    valid: boolean
    error: string
   }
const errorResponse = (): CustomResponse => {
    return { valid: false, error: 'error occurred' }
   }
const validator = ( validatorFn?: () => CustomResponse ): CustomResponse => {
     return errorResponse()
 }   
console.log(validator(() => errorResponse()).valid) //=> false
console.log(validator().error) //=> 'error occurred'

const val:any= validator(() => errorResponse()).valid;
document.getElementById("3").innerHTML = val

const val1:any= validator().error;
document.getElementById("3_1").innerHTML = val1
