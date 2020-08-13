let arr = [4, 3, 9, 10, 5];


let swap = function (array, index1, index2) {
  var aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
};

function bubleSort(){
    for(let i=0;i<arr.length; i++){
       for(let j=0;j<arr.length-1-i;j++){
           if(arr[j]>arr[j+1]){
               swap(arr,j,j+1);
           }
       }
    }
}

bubleSort();

console.log(arr);