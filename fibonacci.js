function fibonacci(num) {
  // create array of nums with range 0-num
  // Fn = (Fn-1) + (Fn-2)
  let fullArray = [0, 1]
  // count = 0

  for (i = 0; i <= num; i++) {
    let tempNum = fullArray[i] + fullArray[i + 1]
    fullArray.push(tempNum)
  }
  return fullArray[num];
}
console.log(fibonacci(10))
module.exports = fibonacci;
