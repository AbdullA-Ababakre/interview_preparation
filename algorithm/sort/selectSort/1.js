let arr = [50, 10, 90, 30, 70, 40, 80, 60, 20];

function swap(newArr,i,j){
  let temp=newArr[i];
  newArr[i]=newArr[j];
  newArr[j]=temp;
}

let min;
for(let i=0;i< arr.length; i++){
    min=i;
    for(let j=i+1;j<arr.length; j++){
        if(arr[min]>arr[j]){
           min=j;
        }
    }
    if(i!=min){
         swap(arr,i,min);
    }
}


console.log(arr);