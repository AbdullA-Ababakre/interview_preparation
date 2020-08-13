// https://www.nowcoder.com/practice/beb5aa231adc45b2a5dcc5b62c93f593?tpId=13&&tqId=11166&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

let arr=[3,5,2,4,7,6];  // [3,5,7,2,4,6]

function reOrderArray(array)
{
    let odd=[];
    let even=[];
   for(let i=0;i<arr.length;i++){
       if(arr[i]%2!==0){
           odd.push(arr[i]);
       }else{
           even.push(arr[i]);
       }
   }
   let res=[...odd,...even];
   return res;
}

let res=reOrderArray(arr);
console.log(res);