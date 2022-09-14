function convert(min) {
    let seconds = min * 60
    return (document.getElementById("3").innerHTML = [`${min} min = ${seconds} sec`])
}
  // convert(5)
  // convert(3)
  // convert(2)