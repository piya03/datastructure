//Write a recursive function to calculate the factorial of a number.
// factorial(5) should return 120.

function factorial(n) {
  let fac = 1;
  for (let i = n; i > 0; i--) {
    fac *= i;
  }
  return fac;
}

//console.log(factorial(5), "normal factorial");
// 5 * 4 * 3 * 2 * 1
function factorialRec(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorialRec(n - 1);
  }
}
console.log(factorialRec(5), "with recursion factorial");
