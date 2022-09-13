function isfizzBuzz(num) {
    if (`${typeof (num)}` != 'number') {
        //console.log("Nan Not a Number! Please Input Number")
        document.getElementById("9").innerHTML = [`Nan Not a Number! Please Input Number`]
    }
    else {
        if (num % 3 == 0 && num % 5 == 0) {
            //console.log('FizzBuzz')
            document.getElementById("9").innerHTML = [`FizzBuzz`]
        }
        else if (num % 3 == 0) {
            //console.log('Fizz')
            document.getElementById("9").innerHTML = [`Fizz`]
        }
        else if (num % 5 == 0) {
            //console.log('Buzz')
            document.getElementById("9").innerHTML = [`Buzz`]
        }
        else {
            //console.log(`some odd number entered:${num}`)
            document.getElementById("9").innerHTML = [`some odd number entered:${num}`]
        }
    }
}
// isfizzBuzz('one')
// isfizzBuzz(true)
// isfizzBuzz(9)
// isfizzBuzz(10)
// isfizzBuzz(30)
// isfizzBuzz(11)