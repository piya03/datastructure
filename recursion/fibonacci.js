//Write a recursive function to generate the nth Fibonacci number.
//Example: fibonacci(5) should return 3.

//question 1
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
}
// uncomment to see the result
//console.log(fibonacci(5), "normal fibonacci");

//question 2
function fibonacciRec(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
  }
}
console.log(fibonacciRec(5), " 5th fibonacciRec is ");
