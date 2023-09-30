//question 3
//Write a recursive function to find the sum of elements in an array.
//[1, 2, 3, 4, 5] should return 15.

function sumRec(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  } else {
    return arr[index] + sumRec(arr, index + 1);
  }
}

console.log(sumRec([1, 2, 3, 4, 5]), "recursion sum");

//[4,3,5,1]
function multiplyRec(arr, index = 0) {
  if (arr.length === index) {
    return 1;
  } else {
    return arr[index] * multiplyRec(arr, index + 1);
  }
}

console.log(multiplyRec([4, 3, 5, 1]), "multiply rec");
