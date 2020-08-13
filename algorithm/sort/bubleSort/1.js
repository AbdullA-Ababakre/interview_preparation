let arr = [4, 3, 9, 10, 5];

let swap = function (array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};

function bubleSort() {
  var length = arr.length; 
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1); 
      }
    }
  }
}

bubleSort();
console.log(arr);
