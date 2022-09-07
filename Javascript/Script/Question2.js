function circuitPower(volt,current)
{
    return volt*current
}

power=circuitPower(230,10)
//console.log(`Power = ${power}`)
document.getElementById("2").innerHTML =[`Power = ${power}`]

power=circuitPower(110,3)
//console.log(`Power = ${power}`)
document.getElementById("2").innerHTML =[`Power = ${power}`]


power=circuitPower(480,20)
//console.log(`Power = ${power}`)
document.getElementById("2").innerHTML =[`Power = ${power}`]