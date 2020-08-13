let arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];

let swap = (arr, low, height) => {
  let tem = arr[low];
  arr[low] = arr[height];
  arr[height] = tem;
};

function partion(arr, low, height) {
  let pivotKey = arr[low];
  while (low < height) {
    while (low < height && arr[height] >= pivotKey) {
      height--;
    }
    swap(arr, low, height);
    while (low < height && arr[low] <= pivotKey) {
      low++;
    }
    swap(arr, low, height);
  }
  return low;
}

function Qsort(arr, low, height) {
  if (low < height) {
    let pivot = partion(arr, low, height);
    Qsort(arr, low, pivot - 1);
    Qsort(arr, pivot + 1, height);  
  }
}

function Sort() {
  Qsort(arr, 0, arr.length - 1);
}

Sort();

console.log(arr);
