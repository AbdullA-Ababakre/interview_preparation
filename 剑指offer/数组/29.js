function GetLeastNumbers_Solution(input, k)
{
   let arr=[];
   arr=input.sort(function(a,b){
       return a-b;
   });
  for(let i=0;i<k;i++){
      console.log(arr[i]);
  }
}

// let input=[4,5,1,6,2,7,3,8];
// let k=4;
let res=GetLeastNumbers_Solution(input,k);
