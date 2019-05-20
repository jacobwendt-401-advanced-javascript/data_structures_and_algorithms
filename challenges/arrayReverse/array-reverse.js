
let reverse = function(arr) {
  let newArray = [];
  for( let i = 0; i < arr.length; i++) {
    newArray[newArray.length] = arr[arr.length - i - 1];
  }
  return newArray;
};

console.log(reverse([1,2,3,4,5,6,7,8]));
