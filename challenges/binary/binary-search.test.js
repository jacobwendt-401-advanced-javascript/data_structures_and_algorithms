var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var key = 4;

console.log('current arr is', arr);
console.log('current key is', key);

const search = (arr, key) => {
  var mid = Math.round(arr.length / 2);
  console.log('the mid-point of arr is', mid);
  console.log('comparing', key, 'against', mid, '...');

  //LESS THAN//
  if (key < mid) {
    console.log(key, 'is less then', mid);
    mid = Math.round(mid / 2);
    console.log('the mid-point of arr is now', mid);
    console.log('comparing', key, 'against', mid, '...');
    if (key < mid) {
      console.log(key, 'is less then', mid);
      mid = Math.round(mid / 2);
      console.log('the mid-point of arr is now', mid);
      console.log('comparing', key, 'against', mid, '...');
    } else if (key = mid) {
      console.log('match!');
      return mid;
    }
    if (key < mid) {
      console.log(key, 'is less then', mid);
      mid = Math.round(mid / 2);
      console.log('the mid-point of arr is now', mid);
      console.log('comparing', key, 'against', mid, '...');
    } else if (key = mid) {
      console.log('match!');
      return mid;
    }
  }

  //GREATER TAHN//
  else if (key > mid) {
    console.log(key, 'is greater then', mid);
    mid = Math.round(mid / 2);
    console.log('the mid-point of arr is now', mid);
    console.log('comparing', key, 'against', mid, '...');
    if (key < mid) {
      console.log(key, 'is greater then', mid);
      mid = Math.round(mid / 2);
      console.log('the mid-point of arr is now', mid);
      console.log('comparing', key, 'against', mid, '...');
    }
    if (key < mid) {
      console.log(key, 'is greater then', mid);
      mid = Math.round(mid / 2);
      console.log('the mid-point of arr is now', mid);
      console.log('comparing', key, 'against', mid, '...');
    }
  }

  //MATCH//
  else if (key = mid) {
    console.log(key, 'matches', mid);
  }
};

search(arr, key);
