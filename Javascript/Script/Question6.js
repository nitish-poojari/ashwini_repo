function swap(n1, n2) {
  let n3 = n1
  n1 = n2
  n2 = n3
  return (document.getElementById("6").innerHTML = [`n1:${n1}, n2:${n2}`])
}

//   swap(10,20)