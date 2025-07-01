function d(n) {
  // console.log(n)
  const digits = n.toString().split('').map(Number)
  // console.log(digits, "==")
  return n + digits.reduce((sum, digit) => sum + digit, 0)
}


let hasGenerator = new Array(5001).fill(false)
// console.log(hasGenerator, '==')
for (let i = 1; i <= 5000; i++) {
  let generated = d(i)
  // console.log(generated, "===")
  // console.log(hasGenerator[i], '==', i)
  if (generated <= 5000) {
    hasGenerator[generated] = true
  }
}

// console.log(hasGenerator)

let sumSelfNumbers = 0
for (let i = 1; i <= 5000; i++) {
  if (!hasGenerator[i]) {
    // console.log(i, "===")
    sumSelfNumbers += i
  }
}

console.log("Jumlah self-numbers dari 1 hingga 5000 :", sumSelfNumbers)